declare module 'did-core' {
    export type did_t = string;
    export type vcJwt_t = string;
    export type vpJwt_t = string;
    export type address_t = string;
    export type privKey_t = string;
    export type pubKey_t = string;
    export type claim_t = object;
    export type identifier_t = string;

    export interface DIDInfo {
        did:            did_t;
        walletAddress:  address_t;
        privKey:        privKey_t;
        pubKey:         pubKey_t;
    }

    export interface PostVerifiableCredentialRequestBody {
        holderDID:  did_t;
        claim:      claim_t;
        issuerDID:  did_t;
        issuerPriv: privKey_t;
    }

    export interface PostVerifiablePresentationRequestBody {
        holderDID:              did_t;
        holderPriv:             privKey_t;
        verifiableCredentials:  vcJwt_t[];
    }

    export interface PostVerifiedCredentialRequestBody {
        verifiableCredential:   vcJwt_t;
    }

    export interface PostVerifiedPresentationRequestBody {
        verifiablePresentation: vpJwt_t;
    }

    export interface ClaimContentInterface {
        from:   string;
        to:     string;
        where:  string;
        what:   string;
    }

    interface UserMinimumInterface {
        did:            did_t,
        display_name:   string,
    }

    export interface ClaimMinimumInterface {
        id:         string,
        issuer?:    UserMinimumInterface,
        holder?:    UserMinimumInterface,
        title:      string,
        status?:    number,
    }

    interface UserDetailInterface {
        did:            did_t,
        display_name:   string,
        contact:        string,
        email:          string,
        address:        string,
        birth?:         string,
    }

    export interface ClaimDetailInterface {
        id:         string,
        title:      string,
        claim:      ClaimContentInterface,
        issuer?:    UserDetailInterface,
        holder?:    UserDetailInterface,
        status?:    number,
        vc?:        string,
    }
}
