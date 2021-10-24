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

    isPlayerEnteringLoadingZone(): boolean {
        return this.emu.rdramRead16(this.global.game_state) === 0x16;
    }

    isDemoMode(): boolean {
        return this.emu.rdramRead8(0x807A947B) === 1;
    }
    
    isInGame(): boolean {
        const safety = [API.SADX.GameModes.Adventure_Field, API.SADX.GameModes.Adventure_ActionStg, API.SADX.GameModes.Trial, API.SADX.GameModes.Mission]
        return !this.isDemoMode() && safety.includes(this.global.game_mode) || (this.global.game_state === 0xF) || this.isPaused()
    }

    isInMenu(): boolean {
        return this.global.game_mode === API.SADX.GameModes.Menu;
    }

    isTitleScreen(): boolean {
        return this.global.game_state === 0x15;
    }

    isLevelNumberValid(): boolean {
        return !this.isInMenu() && this.global.current_level <= 42 && this.global.current_level >= 1;
    }

    isPaused(): boolean {
        return this.global.game_state === 0x10;
    }
}