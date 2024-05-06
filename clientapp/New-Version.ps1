<#
.Synopsis
   Creeaza o versiune noua a aplicatiei client.
.DESCRIPTION
   Creeaza o versiune a aplicatiei client, prin rularea urmatorilor pasi:
   - Citeste versiunea din src/version.json
   - Creste numarul de build
   - Aplica versiunea obtinuta in src/version.json
   - Aplica versiunea obtinuta in src/app.properties.js
   - Aplica versiunea obtinuta in package.json
.EXAMPLE
   New-Version -SolutionPath 'C:\Src\ClientAppFolder'
#>
[CmdletBinding(
    SupportsShouldProcess = $true, 
    ConfirmImpact = 'Medium', 
    DefaultParameterSetName="IncrementAt"
)]
Param
(
    # Calea catre directorul radacina al solutiei
    [Parameter(Mandatory=$false, Position = 0)]
    [string]$SolutionPath,

    # Specifica unde se creste versiunea. Sunt acceptate valorile: 1 (major), 2 (minor), 3 (build) si 4 (revision).
    [Parameter(Mandatory=$false, Position = 1, ParameterSetName = "IncrementAt")]
    [ValidateRange(1, 4)]
    [int]$IncrementAt = 3,
        
    # Specifica versiunea explicita pe care dorim sa o setam
    [Parameter(Mandatory=$true, Position = 2, ParameterSetName = "SpecificVersion")]
    [ValidatePattern("^\d{1,5}[.]\d{1,5}[.]\d{1,5}[.]\d{1,5}$")]
    [string]$SpecificVersion
)

function Get-Version([string]$Path, [string]$Pattern, [bool]$Increment, [int]$IncrementAt = 3)
{
    [string]$content = Get-Content $Path
    if ($content -match $Pattern) 
    {
        [int]$a = $Matches[1]
        [int]$b = $Matches[2]
        [int]$c = $Matches[3]
        [int]$d = $Matches[4]
                
        if ($Increment)
        {
            if ($IncrementAt -eq 1) { $a++ }
            elseif ($IncrementAt -eq 2) { $b++ }
            elseif ($IncrementAt -eq 3) { $c++ }
            else { $d++ }
        }

        "$a.$b.$c.$d"
    }
}

function Set-FileVersion
{
    [CmdletBinding(SupportsShouldProcess = $true, ConfirmImpact = 'Medium')]
    Param
    (
        # Full path
        [Parameter(Mandatory=$true, Position = 0, ValueFromPipeline = $true, ValueFromPipelineByPropertyName = $true)]
        [string]$FullName,

        # Old version pattern
        [Parameter(Mandatory=$true, Position = 1)]
        [string]$VersionPattern,

        # New version to set
        [Parameter(Mandatory=$true, Position = 2)]
        [string]$NewVersion,

        # Action to confirm
        [string]$Action
    )

    Begin
    {
        # Initializari
        $encoding = New-Object 'System.Text.UTF8Encoding' $false
    }
    Process
    {
        # Parcurg fisierele AssemblyInfo
        [string]$content = [io.file]::ReadAllText($FullName, $encoding)
                
        # Verific daca fisierul contine tiparul
        if ($content -match $VersionPattern) 
        {
            # Solicit cresterea versiunii
            if ($PSCmdlet.ShouldProcess($FullName, $Action))
            {
                # Inlocuiesc versiunea
                $content = $content.Replace($Matches[0], $NewVersion)
                [io.file]::WriteAllText($FullName, $content, $encoding)
            }
        }
    }
    End { }
}

<#
.Synopsis
   Seteaza versiunea
.DESCRIPTION
   Seteaza versiunea noua modificand package.json, src/version.json, src/app.properties.js
.EXAMPLE
   Set-SolutionVersion -SolutionPath 'C:\Src\ClientAppFolder' -Version 1.2.3.4
#>
function Set-SolutionVersion
{
    [CmdletBinding(SupportsShouldProcess = $true, ConfirmImpact = 'Medium')]
    Param
    (
        # Solution directory path
        [Parameter(Mandatory=$true, Position = 0)]
        [string]$SolutionPath,

        # New version to set
        [Parameter(Mandatory=$true, Position = 1)]
        [ValidatePattern("^\d{1,5}[.]\d{1,5}[.]\d{1,5}[.]\d{1,5}$")]
        [string]$Version
    )

    Begin
    {
        # Initializari
        [string]$patternVersionJson = '\"version\":\s*?\"(\d{1,5})[.](\d{1,5})[.](\d{1,5})([.](\d{1,5}))*?\"'
        [string]$patternPackageJson = '\"version\":\s*?\"(\d{1,5})[.](\d{1,5})[.](\d{1,5})([.](\d{1,5}))*?\"'
        [string]$patternAppPropertiesJs = 'CLIENT_APP_VERSION:\s*?\"(\d{1,5})[.](\d{1,5})[.](\d{1,5})([.](\d{1,5}))*?\"'
        
        [string]$newVersionJsonVersion = "`"version`": `"$Version`""
        [string]$newPackageJsonVersion = "`"version`": `"$Version`""
        [string]$newAppPropertiesJsVersion = "CLIENT_APP_VERSION: `"$Version`""
        
        [string]$actionVersionJsonVersion = "VersionJsonVersion = $Version"
        [string]$actionPackageJsonVersion = "PackageJsonVersion = $Version"
        [string]$actionAppPropertiesJsVersion = "AppPropertiesJsVersion = $Version"
        
    }
    Process
    {
        # Actualizez src/version.json
        Get-ChildItem -Path $SolutionPath -Filter "src/version.json" | 
            Set-FileVersion -VersionPattern $patternVersionJson -NewVersion $newVersionJsonVersion -Action $actionVersionJsonVersion

        # Actualizez src/app.properties.js
        Get-ChildItem -Path $SolutionPath -Filter "src/app.properties.js" | 
            Set-FileVersion -VersionPattern $patternAppPropertiesJs -NewVersion $newAppPropertiesJsVersion -Action $actionAppPropertiesJsVersion

        # Actualizez package.json
        Get-ChildItem -Path $SolutionPath -Filter "package.json" | 
        Set-FileVersion -VersionPattern $patternPackageJson -NewVersion $newPackageJsonVersion -Action $actionPackageJsonVersion

    }
    End { }
}

# Initializari
[string]$patternVersionJson = '\"version\":\s*?\"(\d{1,5})[.](\d{1,5})[.](\d{1,5})([.](\d{1,5}))*?\"'
    
# Folosim directorul curent, daca nu avem parametrul $solutionPath specificat
if (-Not $solutionPath)
{
    $solutionPath = Get-Location
    Write-Warning "Folosim calea curenta: $solutionPath"
}

# Citesc fisierul src/version.json si citesc versiunea curenta
if ( $PSCmdlet.ParameterSetName -eq "IncrementAt")
{
    $newVersion = Get-ChildItem -Path $SolutionPath -Filter "src/version.json" | `
        ForEach-Object { New-Object -TypeName 'System.Version' (Get-Version -Path $_.FullName -Pattern $patternVersionJson -Increment $true -IncrementAt $IncrementAt) } | `
        Measure-Object -Maximum | `
        Select-Object -ExpandProperty Maximum
}
else 
{
    $newVersion = New-Object -TypeName 'System.Version' $SpecificVersion
}

# Cresc versiunea in toate proiectele solutiei
Set-SolutionVersion -SolutionPath $SolutionPath -Version ($newVersion.ToString())

# Afisez mesajul de finalizare
Write-Warning "Procesul de incrementare a versiunii a fost finalizat. Versiunea curenta este $($newVersion.ToString()). `
Faceți commit / push, înainte de a face build!"

Write-Warning "Commit modificarile de versiune"
git commit -a -m "Crestere versiune la $($newVersion.ToString())"