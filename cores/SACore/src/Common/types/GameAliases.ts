export interface IAddresses {
    chao_data: number;
}

export class SupportedGames {
    static SADX_GC: IAddresses = {
        chao_data: 0x81055158
    }

    static SA2B_GC: IAddresses = {
        chao_data: 0 //(Ptr + 0x48E4 = Chao 1) //0x81639304 // 0x81638AE4?
    }

    static NONE: IAddresses = {
        chao_data: 0
    }
}