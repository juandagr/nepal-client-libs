import { EvidenceType } from "./evidence.class";

export class SourceType {
    // static sources types
    public static readonly AUDITLOG = 'Incident Audit Trail';
    public static readonly FLAGGED = 'Flagged Evidence';
    public static readonly ASSOCLOG = 'application/x-alpacket-logmsgs';
    public static readonly ASSOCEVENT = 'application/x-alpacket-snmsgs';
    public static readonly ASSOCWEBEVENT = 'application/x-alpacket-wafmsgs';
    public static readonly GUARDDUTY = 'guardduty';
    public static readonly ASSOCLOGMEG = 'application/x-alpacket-megmsgs';
    public static readonly LOGREVIEWATTACHMENT = 'Attachment';
    public static readonly LOGREVIEWATTACHMENTFLAGGED = 'FlaggedEvidence';
    public static readonly ASSOCIDS = 'application/x-alpacket-idsmsgs';
    public static readonly EPMSGS = 'application/x-alpacket-epmsgs';
    public static readonly ATTACHMENTS = 'application/al-lr-case-evidence';
    public static readonly FIMDATA = 'application/x-alpacket-fimdata';

    /**
     * Return the source name according the content type
     * @param {string} Content type
     * @return {string} Source name
     */
    public static getSourceName(type:string):string {

        switch (type) {
            case SourceType.ASSOCLOG:
            case SourceType.ASSOCWEBEVENT:
            case SourceType.ASSOCLOGMEG:
                return "Log";
            case SourceType.ASSOCEVENT:
            case SourceType.ASSOCIDS:
                return "Event";
            case SourceType.GUARDDUTY:
                return "GuardDuty findings";
            case SourceType.ATTACHMENTS:
                return "Attachments";
            case SourceType.EPMSGS:
                return "Endpoint";
            case SourceType.FIMDATA:
                return "FIM Data";
            default:
                console.warn("Please notify the ui team that we have a new content type", type);
                return type;
        }
    }

    /**
     * Return the evidence by content type
     * @param {string} Content type
     * @return {string} Evidence type
     */
    public static getType(type:string):string {

        switch (type) {
            case SourceType.ASSOCLOG:
            case SourceType.ASSOCWEBEVENT:
            case SourceType.ASSOCLOGMEG:
                return EvidenceType.AssocLog;
            case SourceType.ASSOCEVENT:
            case SourceType.ASSOCIDS:
                return EvidenceType.AssocEvent;
            case SourceType.GUARDDUTY:
                return EvidenceType.Guardduty;
            case SourceType.EPMSGS:
                return EvidenceType.EndpointEvent;
            case "":
            default:
                console.warn("Please notify the ui team that we have a new content type", type);
                return type;
        }
    }

}
