export const ValidationError_FolosesteDataPrecedenta: string = "Folosiți o dată din trecut";
export const ValidationError_FolosesteDataViitoare: string = "Folosiți o dată din viitor";
export const Date_MinimumDate: Date = new Date("01/01/1900");
export const ValidatorPatterDecimal: RegExp = /(^100([.]0{1,2})?)$|(^\d{1,2}([.,]\d{1,2})?)$/
export const IdInstitutieSOAPSN_STS: Number = 1;

export const NotificationServiceIntervalMinutes: number = 5;

export const enum TipFunctieEnum {
    Militar = 1,
    Civil = 2
};

export const enum CategorieFunctieEnum {
    // Operare
    O = 3
};

export const enum TipOcuparePostEnum {
    Numire = 1,
    Imputernicire = 2,
    Detasare = 3
};

export const enum TipNivelAcces {
    UE = 1,
    NATO = 2,
    Național = 3
};

export const enum StatutPersonalEnum {
    None = 0,
    Candidat = 1,
    Student = 2,
    Elev = 3,
    Angajat = 4,
    Fost_Angajat = 5,
    Cadru_Militar_In_Rezerva = 6,
    Cadru_Militar_In_Retragere = 7,
    Rezerva_Razboi = 8,
    Rezerva_Suplimentara_Razboi = 9,
    Absolvent_Ofiter = 10,
    Absolvent_mmIV = 11
};

export enum VizualizareFisierApiUrl {
    DocumenteIdentitate = "api/dp/dpdidw",
    TitluSpecialistClasa = "api/dp/dp-titluspecialistclasa/download",
    FisaPostSuplimentara = "api/dp/dpfpsdw",
    AltaInformatie = "api/dp/dpaidw",
    FunctiiSts = "api/dp/dpfstsdw",
    DocumenteCandidati = "api/dc/doc/download",
    DocumentePersoane = "api/dp/dpdoc/download",
    CereriRecrutareDocumente = "api/cr/crcd/download",
    TematicaPost = "api/cr/cetematica/download",
    MentinereActivitateDetaliiDownloadAdeverintaMedicala = "api/pa-mac/download",
    CvCandidati = "api/cr/vcv",
};

export enum VizualizareRaportApiUrl {
    DocumenteCursPregatireProfesionala = "api/a/download",
    ListaAngajati = "api/dp/la",
    FisaEvidenta = "api/dp/dpfe",
    OrganigramaStatPace = "api/org/orgstatpace",
    OrganigramaStatRazboi = "api/org/orgstatrazboi",
    FisaPost = "api/fp",
    RezervistCm = "api/rez/cm",
    RezervistClaseEvidenta = "api/rez/ce",
    RezervistSpecialitatiMilitare = "api/rez/sm",
    RezervistScosEvidenta = "api/rez/se",
    RezervistSubstituiri = "api/rez/sub",
    AngajatiFaraPost = "api/dp/dpafp",
    ConditiiDeMunca = "api/dp/dpcm",
    PersonalActivExtins = "api/dp/dprpae",
    PropozabilGradatiiMilitari = "api/dp/dppgm",
    PropozabiliGradatiiCivili = "api/dp/dppgc",
    PropozabiliSemnOnorific = 'api/dp/dppso',
    PropozabiliGradatiiMediciPeCivili = 'api/dp/dppgmpc',
    Vechimi = "api/dp/dprv",
    RepartizareStructuri = "api/org/orgrepartizarestructuri",
    RepartizareFunctii = "api/org/orgrepartizarefunctii",
    IncadrareFunctii = "api/org/orgincadrarefunctii",
    IncadrareDirectie = "api/org/orgincadraredirectie",
    SpecialitatiMilitareDefinite = "api/org/orgsmd",
    SpecialitatiMilitareRepartizatePeStrcturi = "api/org/orgsmrps",
    FunctiiPrevazuteIncadratePeCorpuriLaData = "api/dp/dpfpipcld",
    FunctiiPrevazuteIPCTSALaData = "api/org/orgfpipctsald",
    Pierderi = "api/dp/dprp",
    Decoratii = "api/dp/dprd",
    CerereDeRecrutare = "api/rec/cr",
    CerereRecrutareModificatDownload = "api/rec/crm",
    ProcesVerbalInterviu = "api/rec/pvi",
    ProcesVerbalInterviuModificatDownload="api/rec/pvim",
    NotaRaportConcursMilitari = "api/rec/nr",
    NotaRaportConcursMilitariModificat = "api/rec/nrm",
    ProcesVerbalExaminare = "api/sel/pve",
    CentralizatorExaminareExtern = "api/sel/cex",
    ProcesVerbalSelectie = "api/sel/pvs",
    ProcesVerbalSelectieModificat = "api/sel/pvsm",
    NotaRaportDPS = "api/inc/nrdps",
    FisaPrezentare = "api/inc/fp",
    NotaRaportDPSModificat = "api/inc/nrdpsm",
    OrdinIncadrareMilitari = "api/inc/oim",
    OrdinIncadrareMilitariModificat = "api/inc/oincmd",
    RaportProgramareExaminare = "api/sel/rpe",
    MailProgramareInterviuVideoconferinta = "api/rec/mpiv",
    MailProgramareInterviuFizic = "api/rec/mpif",
    MailCandidatiRespinsi = "api/rec/mcr",
    MailProgramareCandidatValid = "api/sel/mpcv",
    MailCentralizatorRezultate = "api/sel/mcr",
    MailVizitaMilitara = "api/inc/mvm",
    NotaRaportConcurs = "api/rec/nrc",
    NotaRaportConcursModificatDownload = "api/rec/nrcm",
    CentralizatorSelectieDosare = "api/rec/csd",
    MailAtribuireCodCivili = "api/rec/macc",
    AdresaPublicarePosturi = "api/rec/app",
    ProcesVerbalProbe = "api/sel/pvp",
    CentralizatorProbe = "api/sel/cp",
    AnuntPublicareConcursUnuUnuDoi = "api/rec/apuud",
    ProcesVerbalSelectieDosare = "api/rec/pvsd",
    RaportCFP = "api/mc/rcfp",
    NotaRaportPrelungireImputernicire = "api/mc/nrpi",
    RaportRevenirePeFunctieDupaCfp = "api/mc/rrpfdcfp",
    OrdinCFP = "api/mc/ocfp",
    OrdinPrelungireCFP = "api/mc/opcfp",
    OrdinRevenireCFP = "api/mc/orcfp",
    FluxProcesAprobareRaportModificatDownload = "api/mc/fparm",
};