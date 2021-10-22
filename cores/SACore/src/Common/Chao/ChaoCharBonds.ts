import { JSONTemplate } from "modloader64_api/JSONTemplate";
import { ILogger, IModLoaderAPI } from "modloader64_api/IModLoaderAPI";
import { ChaoAPI } from "../../../API/imports";
import IMemory from "modloader64_api/IMemory";
import { current_game } from '../../SACore';

const enum GameBondOffset {
    SADX = 0x4FC,
    SA2B = 0x16C
}

class ChaoCharacterBond extends JSONTemplate implements ChaoAPI.IChaoCharacterBond {
    private ModLoader: IModLoaderAPI;
    private emulator: IMemory;
    private instance: number;
    private slot: number;
    private game: GameBondOffset;
    private character: ChaoAPI.SADXCharacters | ChaoAPI.SA2BCharacters;
    private get a_addr()       { return this.instance + (this.slot * 0x800) + (this.character * 6) + this.game; }
    private get b_addr()       { return this.instance + (this.slot * 0x800) + (this.character * 6) + this.game; }
    private get unknown_addr() { return this.instance + (this.slot * 0x800) + (this.character * 6) + this.game; }

    constructor(ModLoader: IModLoaderAPI, log: ILogger, slot: number, game: GameBondOffset, character: ChaoAPI.SADXCharacters | ChaoAPI.SA2BCharacters) {
        super();
        this.ModLoader = ModLoader;
        this.emulator = ModLoader.emulator;
        this.instance = current_game.chao_data;
        this.slot = slot;
        this.game = game;
        this.character = character;
    }

    get a()       { return this.emulator.rdramReadS8(this.a_addr);       }
    get b()       { return this.emulator.rdramRead8(this.b_addr);        }
    get unknown() { return this.emulator.rdramRead32(this.unknown_addr); }

    set a(num: number)       { this.emulator.rdramWrite8(this.a_addr,        num); }
    set b(num: number)       { this.emulator.rdramWrite8(this.b_addr,        num); }
    set unknown(num: number) { this.emulator.rdramWrite32(this.unknown_addr, num); }
}

export class SADXCharacterBonds extends JSONTemplate implements ChaoAPI.ISADXCharacterBonds {
    sonic: ChaoAPI.IChaoCharacterBond;
    tails: ChaoAPI.IChaoCharacterBond;
    knuckles: ChaoAPI.IChaoCharacterBond;
    amy: ChaoAPI.IChaoCharacterBond;
    gamma: ChaoAPI.IChaoCharacterBond;
    big: ChaoAPI.IChaoCharacterBond;

    constructor(ModLoader: IModLoaderAPI, log: ILogger, slot: number) {
        super();

        this.sonic    = new ChaoCharacterBond(ModLoader, log, slot, GameBondOffset.SADX, ChaoAPI.SADXCharacters.SONIC);
        this.tails    = new ChaoCharacterBond(ModLoader, log, slot, GameBondOffset.SADX, ChaoAPI.SADXCharacters.TAILS);
        this.knuckles = new ChaoCharacterBond(ModLoader, log, slot, GameBondOffset.SADX, ChaoAPI.SADXCharacters.KNUCKLES);
        this.amy      = new ChaoCharacterBond(ModLoader, log, slot, GameBondOffset.SADX, ChaoAPI.SADXCharacters.AMY);
        this.gamma    = new ChaoCharacterBond(ModLoader, log, slot, GameBondOffset.SADX, ChaoAPI.SADXCharacters.GAMMA);
        this.big      = new ChaoCharacterBond(ModLoader, log, slot, GameBondOffset.SADX, ChaoAPI.SADXCharacters.BIG);
    }

    jsonFields: string[] = [
        'sonic',
        'tails',
        'knuckles',
        'amy',
        'gamma',
        'big'
    ];
}

export class SA2BCharacterBonds extends JSONTemplate implements ChaoAPI.ISA2BCharacterBonds {
    sonic: ChaoAPI.IChaoCharacterBond;
    shadow: ChaoAPI.IChaoCharacterBond;
    tails: ChaoAPI.IChaoCharacterBond;
    eggman: ChaoAPI.IChaoCharacterBond;
    knuckles: ChaoAPI.IChaoCharacterBond;
    rouge: ChaoAPI.IChaoCharacterBond;

    constructor(ModLoader: IModLoaderAPI, log: ILogger, slot: number) {
        super();

        this.sonic    = new ChaoCharacterBond(ModLoader, log, slot, GameBondOffset.SA2B, ChaoAPI.SA2BCharacters.SONIC);
        this.shadow   = new ChaoCharacterBond(ModLoader, log, slot, GameBondOffset.SA2B, ChaoAPI.SA2BCharacters.SHADOW);
        this.tails    = new ChaoCharacterBond(ModLoader, log, slot, GameBondOffset.SA2B, ChaoAPI.SA2BCharacters.TAILS);
        this.eggman   = new ChaoCharacterBond(ModLoader, log, slot, GameBondOffset.SA2B, ChaoAPI.SA2BCharacters.EGGMAN);
        this.knuckles = new ChaoCharacterBond(ModLoader, log, slot, GameBondOffset.SA2B, ChaoAPI.SA2BCharacters.KNUCKLES);
        this.rouge    = new ChaoCharacterBond(ModLoader, log, slot, GameBondOffset.SA2B, ChaoAPI.SA2BCharacters.ROUGE);
    }

    jsonFields: string[] = [
        'sonic',
        'shadow',
        'tails',
        'eggman',
        'knuckles',
        'rouge'
    ];
}