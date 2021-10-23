import { IModLoaderAPI } from "modloader64_api/IModLoaderAPI";
import * as API from '../../API/imports';
import { JSONTemplate } from "modloader64_api/JSONTemplate";
import IMemory from "modloader64_api/IMemory";

export class SADXHelper extends JSONTemplate implements API.SADX.ISADXHelper {

    private save: API.SADX.ISaveContext;
    private global: API.SADX.IGlobalContext;
    private sonic: API.SADX.ISonic;
    private emu: IMemory;
    constructor(
        save: API.SADX.ISaveContext,
        global: API.SADX.IGlobalContext,
        sonic: API.SADX.ISonic,
        memory: IMemory
    ) {
        super();
        this.save = save;
        this.global = global;
        this.sonic = sonic;
        this.emu = memory;
    }

    // isLinkEnteringLoadingZone(): boolean {
    //     let r = this.link.rawStateValue;
    //     return (r & 0x000000ff) === 1;
    // }

    isInGame(): boolean {
        return this.global.game_state === 0xF;
    }

    isTitleScreen(): boolean {
        return this.global.game_state === 0x15;
    }
    
    isLevelNumberValid(): boolean {
        return this.global.current_level <= 42;
    }

    isPaused(): boolean {
        return this.global.game_state === 0x10;
    }
}