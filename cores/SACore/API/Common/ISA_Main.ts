import { ISADXCore } from '../SADX/SADX_API';
import { ISA2BCore } from '../SA2B/SA2B_API';

export interface ISA_Main {
    SADX: ISADXCore | undefined;
    SA2B: ISA2BCore | undefined;
}