git fetch --prune origin

git branch -vv | Foreach-Object {
    Write-Host $_;
    $pattern = "\[origin\/(.*?)\: gone\]";
    $matches = [regex]::Match($_, $pattern);
    if ($matches.Success) {
        $branch = $matches.Groups[1].Value;
        Write-Warning $branch;
        git branch -D $branch;
    }
}