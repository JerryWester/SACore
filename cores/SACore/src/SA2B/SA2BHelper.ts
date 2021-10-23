import { IModLoaderAPI } from "modloader64_api/IModLoaderAPI";
import * as API from '../../API/imports';
import { JSONTemplate } from "modloader64_api/JSONTemplate";
import IMemory from "modloader64_api/IMemory";
import { GameStates, Menus } from "../../API/SA2B/SA2B_API";

export class SA2BHelper extends JSONTemplate implements API.SA2B.ISA2BHelper {

    private save: API.SA2B.ISaveContext;
    private global: API.SA2B.IGlobalContext;
    private sonic: API.SA2B.ISonic;
    private emu: IMemory;
    constructor(
        save: API.SA2B.ISaveContext,
        global: API.SA2B.IGlobalContext,
        sonic: API.SA2B.ISonic,
        memory: IMemory
    ) {
        super();
        this.save = save;
        this.global = global;
        this.sonic = sonic;
        this.emu = memory;
    }

    isPlayerEnteringLoadingZone(): boolean {
        const loadStates = [GameStates.Exit_1, GameStates.Exit_2, GameStates.Exit_3, GameStates.NormalRestart, GameStates.RestartLevel_1, GameStates.RestartLevel_NoLifeLost];
        return loadStates.includes(this.global.game_state);
    }

    isInGame(): boolean {
        return this.global.game_state === GameStates.Ingame;
    }

    isTitleScreen(): boolean {
        return this.global.current_menu === Menus.TitleScreen;
    }

    isMenuSafe(): boolean {
        const unsafeMenus = [Menus.TitleScreen, Menus.FileSelect, Menus.BonusVideo, Menus.Settings]
        return !unsafeMenus.includes(this.global.current_menu);
    }
    
    isLevelNumberValid(): boolean {
        return this.global.current_level <= 90 && this.global.current_level !== 0;
    }

    isPaused(): boolean {
        return this.global.game_state === GameStates.Pause;
    }
}