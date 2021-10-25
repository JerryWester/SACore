// import { current_game } from '../../SACore';
import { JSONTemplate } from 'modloader64_api/JSONTemplate';
import { ILogger, IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import IMemory from 'modloader64_api/IMemory';
import * as API from "../../API/imports";
import { Time } from '../Common/CommonClasses';
import { FakeArray16, FakeArray8, FakeArraySaveKartInfo, FakeArraySaveKartTime, FakeArraySaveLevelInfo, FakeArraySaveLevelScore, IFakeArray } from '../Common/types/FakeArray';

export class SaveBossInfo extends JSONTemplate implements API.SA2B.ISaveBossInfo {
    private ModLoader: IModLoaderAPI;
    private emulator: IMemory;
    private instance: number;
    private get time1_addr()    { return this.instance + 0x00; }
    private get field_3_addr()  { return this.instance + 0x03; }
    private get time2_addr()    { return this.instance + 0x0C; }
    private get field_F_addr()  { return this.instance + 0x0F; }
    private get time3_addr()    { return this.instance + 0x18; }
    private get field_1B_addr() { return this.instance + 0x1B; }
    private get emblem_addr()   { return this.instance + 0xAC; }
    
    time1: API.Common.ITime;
    time2: API.Common.ITime;
    time3: API.Common.ITime;

    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: number) {
        super();
        this.ModLoader = ModLoader;
        this.emulator = ModLoader.emulator;
        this.instance = address;

        this.time1 = new Time(ModLoader, log, this.time1_addr);
        this.time2 = new Time(ModLoader, log, this.time2_addr);
        this.time3 = new Time(ModLoader, log, this.time3_addr);
    }

    jsonFields: string[] = [
        'time1',
        'field_3',
        'time2',
        'field_F',
        'time3',
        'field_1B',
        'emblem'
    ];

    get emblem() { return this.emulator.rdramRead8(this.emblem_addr); }

    set emblem(num: number) { this.emulator.rdramWrite8(this.emblem_addr, num); }

    get field_3()  { return this.emulator.rdramReadBuffer(this.field_3_addr,  0x9);  }
    get field_F()  { return this.emulator.rdramReadBuffer(this.field_F_addr,  0x9);  }
    get field_1B() { return this.emulator.rdramReadBuffer(this.field_1B_addr, 0x91); }

    set field_3(buf: Buffer)  { this.emulator.rdramWriteBuffer(this.field_3_addr,  buf); }
    set field_F(buf: Buffer)  { this.emulator.rdramWriteBuffer(this.field_F_addr,  buf); }
    set field_1B(buf: Buffer) { this.emulator.rdramWriteBuffer(this.field_1B_addr, buf); }
};

export class SaveLevelScore extends JSONTemplate implements API.SA2B.ISaveLevelScore {
    private ModLoader: IModLoaderAPI;
    private emulator: IMemory;
    private instance: number;
    private get rings_addr()   { return this.instance + 0x0; }
    private get field_2_addr() { return this.instance + 0x2; }
    private get score_addr()   { return this.instance + 0x4; }
    private get time_addr()    { return this.instance + 0x8; }
    private get field_B_addr() { return this.instance + 0xB; }

    time: API.Common.ITime;

    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: number) {
        super();
        this.ModLoader = ModLoader;
        this.emulator = ModLoader.emulator;
        this.instance = address;

        this.time = new Time(ModLoader, log, this.time_addr);
    }

    jsonFields: string[] = [
        'rings',
        'field_2',
        'score',
        'time',
        'field_B'
    ];

    get rings()   { return this.emulator.rdramRead16(this.rings_addr);   }
    get field_2() { return this.emulator.rdramRead16(this.field_2_addr); }
    get score()   { return this.emulator.rdramRead32(this.score_addr);   }
    get field_B() { return this.emulator.rdramRead8(this.field_B_addr);  }

    set rings(num: number)   { this.emulator.rdramWrite16(this.rings_addr,   num); }
    set field_2(num: number) { this.emulator.rdramWrite16(this.field_2_addr, num); }
    set score(num: number)   { this.emulator.rdramWrite32(this.score_addr,   num); }
    set field_B(num: number) { this.emulator.rdramWrite8(this.field_B_addr,  num); }
};

export class SaveLevelInfo extends JSONTemplate implements API.SA2B.ISaveLevelInfo {
    private ModLoader: IModLoaderAPI;
    private emulator: IMemory;
    private instance: number;
    private get ranks_addr() { return this.instance + 0x00; }
    private get play_counts_addr() { return this.instance + 0x06; }
    private get scores_addr() { return this.instance + 0x10; }

    ranks: number[] = [];
    play_counts: number[] = [];
    scores: API.SA2B.ISaveLevelScore[] = [];

    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: number) {
        super();
        this.ModLoader = ModLoader;
        this.emulator = ModLoader.emulator;
        this.instance = address;

        for (let i = 0; i < 6; i++) {
            Object.defineProperty(this.ranks, i, {
                get() { return ModLoader.emulator.rdramRead8(address + 0x00 + i * 1); },
                set(num: number) { ModLoader.emulator.rdramWrite8(address + 0x00 + i * 1, num); }
            });
        }
        for (let i = 0; i < 5; i++) {
            Object.defineProperty(this.play_counts, i, {
                get() { return ModLoader.emulator.rdramRead16(address + 0x06 + i * 2); },
                set(num: number) { ModLoader.emulator.rdramWrite16(address + 0x06 + i * 2, num); }
            });
        }
        for (let i = 0; i < 15; i++) {
            this.scores[i] = new SaveLevelScore(ModLoader, log, this.scores_addr + i * 0xC);
        }
    }

    jsonFields: string[] = [
        'ranks',
        'play_counts',
        'scores'
    ];
};

export class SaveKartTime extends JSONTemplate implements API.SA2B.ISaveKartTime {
    private ModLoader: IModLoaderAPI;
    private emulator: IMemory;
    private instance: number;
    private get time_addr() { return this.instance + 0x0; }
    private get character_addr() { return this.instance + 0x3; }

    time: API.Common.ITime;

    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: number) {
        super();
        this.ModLoader = ModLoader;
        this.emulator = ModLoader.emulator;
        this.instance = address;

        this.time = new Time(ModLoader, log, this.time_addr);
    }

    jsonFields: string[] = [
        'time',
        'character'
    ];

    get character() { return this.emulator.rdramRead8(this.character_addr); }

    set character(num: number) { this.emulator.rdramWrite8(this.character_addr, num); }
};

export class SaveKartInfo extends JSONTemplate implements API.SA2B.ISaveKartInfo {
    private ModLoader: IModLoaderAPI;
    private emulator: IMemory;
    private instance: number;
    private get times_addr()  { return this.instance + 0x0; }
    private get emblem_addr() { return this.instance + 0xC; }

    times: API.SA2B.ISaveKartTime[] = [];

    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: number) {
        super();
        this.ModLoader = ModLoader;
        this.emulator = ModLoader.emulator;
        this.instance = address;

        for (let i = 0; i < 3; i++) {
            this.times[i] = new SaveKartTime(ModLoader, log, this.times_addr + i * 3);
        }
    }

    jsonFields: string[] = [
        'times',
        'emblem'
    ];

    get emblem() { return this.emulator.rdramRead8(this.emblem_addr); }

    set emblem(num: number) { this.emulator.rdramWrite8(this.emblem_addr, num); }
};

export class SaveContext extends JSONTemplate implements API.SA2B.ISaveContext {
    private ModLoader: IModLoaderAPI;
    private emulator: IMemory;
    private instance: number;
    private get checksum_addr()         { return this.instance + 0x0000; }
    private get dword_1DEC604_addr()    { return this.instance + 0x0004; }
    private get anonymous_0_addr()      { return this.instance + 0x0008; }
    private get anonymous_1_addr()      { return this.instance + 0x0009; }
    private get anonymous_2_addr()      { return this.instance + 0x000A; }
    private get anonymous_3_addr()      { return this.instance + 0x000B; }
    private get anonymous_4_addr()      { return this.instance + 0x000C; }
    private get emblem_count_addr()     { return this.instance + 0x000D; }
    private get anonymous_5_addr()      { return this.instance + 0x000E; }
    private get anonymous_6_addr()      { return this.instance + 0x000F; }
    private get last_character_addr()   { return this.instance + 0x0010; }
    private get last_level_addr()       { return this.instance + 0x0011; }
    private get anonymous_9_addr()      { return this.instance + 0x0012; }
    private get anonymous_10_addr()     { return this.instance + 0x0013; }
    private get gap_14_addr()           { return this.instance + 0x0014; }
    private get anonymous_11_addr()     { return this.instance + 0x001C; }
    private get anonymous_12_addr()     { return this.instance + 0x001E; }
    private get anonymous_13_addr()     { return this.instance + 0x0020; }
    private get anonymous_14_addr()     { return this.instance + 0x0022; }
    private get dword_1DEC624_addr()    { return this.instance + 0x0024; }
    private get dword_1DEC628_addr()    { return this.instance + 0x0028; }
    private get play_time_addr()        { return this.instance + 0x002C; }
    private get total_rings_addr()      { return this.instance + 0x0030; }
    private get dword_1DEC634_addr()    { return this.instance + 0x0034; }
    private get levels_addr()           { return this.instance + 0x0038; }
    private get kart_race_addr()        { return this.instance + 0x2FB0; }
    private get anonymous_80_addr()     { return this.instance + 0x2FD7; }
    private get anonymous_81_addr()     { return this.instance + 0x2FD8; }
    private get gap_2fd9_addr()         { return this.instance + 0x2FD9; }
    private get hero_boss_attack_addr() { return this.instance + 0x2FF0; }
    private get gap_309d_addr()         { return this.instance + 0x309D; }
    private get dark_boss_attack_addr() { return this.instance + 0x30B4; }
    private get gap_3161_addr()         { return this.instance + 0x3161; }
    private get all_boss_attack_addr()  { return this.instance + 0x3178; }

    kart_race: API.SA2B.ISaveKartInfo[] = [];
    levels: API.SA2B.ISaveLevelInfo[] = [];
    hero_boss_attack: API.SA2B.ISaveBossInfo;
    dark_boss_attack: API.SA2B.ISaveBossInfo;
    all_boss_attack: API.SA2B.ISaveBossInfo;

    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: number) {
        super();
        this.ModLoader = ModLoader;
        this.emulator = ModLoader.emulator;
        this.instance = address;

        for (let i = 0; i < 3; i++) {
            this.kart_race[i] = new SaveKartInfo(ModLoader, log, this.kart_race_addr + i * 0xD);
        }
        for (let i = 0; i < 64; i++) {
            this.levels[i] = new SaveLevelInfo(ModLoader, log, this.levels_addr + i * 0xC4);
        }
        this.hero_boss_attack = new SaveBossInfo(ModLoader, log, this.hero_boss_attack_addr);
        this.dark_boss_attack = new SaveBossInfo(ModLoader, log, this.dark_boss_attack_addr);
        this.all_boss_attack = new SaveBossInfo(ModLoader, log, this.all_boss_attack_addr);
    }

    jsonFields: string[] = [
        'checksum',
        'dword_1DEC604',
        'anonymous_0',
        'anonymous_1',
        'anonymous_2',
        'anonymous_3',
        'anonymous_4',
        'anonymous_5',
        'emblem_count',
        'anonymous_6',
        'last_character',
        'last_level',
        'anonymous_9',
        'anonymous_10',
        'gap_14',
        'anonymous_11',
        'anonymous_12',
        'anonymous_13',
        'anonymous_14',
        'dword_1DEC624',
        'dword_1DEC628',
        'play_time',
        'total_rings',
        'dword_1DEC634',
        'levels',
        'kart_race',
        'anonymous_80',
        'anonymous_81',
        'gap_2fd9',
        'hero_boss_attack',
        'gap_309d',
        'dark_boss_attack',
        'gap_3161',
        'all_boss_attack'
    ];

    // chars
    get anonymous_0()    { return this.emulator.rdramRead8(this.anonymous_0_addr);    }
    get anonymous_1()    { return this.emulator.rdramRead8(this.anonymous_1_addr);    }
    get anonymous_2()    { return this.emulator.rdramRead8(this.anonymous_2_addr);    }
    get anonymous_3()    { return this.emulator.rdramRead8(this.anonymous_3_addr);    }
    get anonymous_4()    { return this.emulator.rdramRead8(this.anonymous_4_addr);    }
    get anonymous_5()    { return this.emulator.rdramRead8(this.anonymous_5_addr);    }
    get emblem_count()   { return this.emulator.rdramRead8(this.emblem_count_addr);   }
    get anonymous_6()    { return this.emulator.rdramRead8(this.anonymous_6_addr);    }
    get last_character() { return this.emulator.rdramRead8(this.last_character_addr); }
    get last_level()     { return this.emulator.rdramRead8(this.last_level_addr);     }
    get anonymous_9()    { return this.emulator.rdramRead8(this.anonymous_9_addr);    }
    get anonymous_10()   { return this.emulator.rdramRead8(this.anonymous_10_addr);   }
    get anonymous_80()   { return this.emulator.rdramRead8(this.anonymous_80_addr);   }
    get anonymous_81()   { return this.emulator.rdramRead8(this.anonymous_81_addr);   }

    set anonymous_0(num: number)    { this.emulator.rdramWrite8(this.anonymous_0_addr,    num); }
    set anonymous_1(num: number)    { this.emulator.rdramWrite8(this.anonymous_1_addr,    num); }
    set anonymous_2(num: number)    { this.emulator.rdramWrite8(this.anonymous_2_addr,    num); }
    set anonymous_3(num: number)    { this.emulator.rdramWrite8(this.anonymous_3_addr,    num); }
    set anonymous_4(num: number)    { this.emulator.rdramWrite8(this.anonymous_4_addr,    num); }
    set anonymous_5(num: number)    { this.emulator.rdramWrite8(this.anonymous_5_addr,    num); }
    set emblem_count(num: number)   { this.emulator.rdramWrite8(this.emblem_count_addr,   num); }
    set anonymous_6(num: number)    { this.emulator.rdramWrite8(this.anonymous_6_addr,    num); }
    set last_character(num: number) { this.emulator.rdramWrite8(this.last_character_addr, num); }
    set last_level(num: number)     { this.emulator.rdramWrite8(this.last_level_addr,     num); }
    set anonymous_9(num: number)    { this.emulator.rdramWrite8(this.anonymous_9_addr,    num); }
    set anonymous_10(num: number)   { this.emulator.rdramWrite8(this.anonymous_10_addr,   num); }
    set anonymous_80(num: number)   { this.emulator.rdramWrite8(this.anonymous_80_addr,   num); }
    set anonymous_81(num: number)   { this.emulator.rdramWrite8(this.anonymous_81_addr,   num); }

    // shorts
    get anonymous_11() { return this.emulator.rdramRead16(this.anonymous_11_addr); }
    get anonymous_12() { return this.emulator.rdramRead16(this.anonymous_12_addr); }
    get anonymous_13() { return this.emulator.rdramRead16(this.anonymous_13_addr); }
    get anonymous_14() { return this.emulator.rdramRead16(this.anonymous_14_addr); }

    set anonymous_11(num: number) { this.emulator.rdramWrite16(this.anonymous_11_addr, num); }
    set anonymous_12(num: number) { this.emulator.rdramWrite16(this.anonymous_12_addr, num); }
    set anonymous_13(num: number) { this.emulator.rdramWrite16(this.anonymous_13_addr, num); }
    set anonymous_14(num: number) { this.emulator.rdramWrite16(this.anonymous_14_addr, num); }

    // ints
    get checksum()      { return this.emulator.rdramRead32(this.checksum_addr);      }
    get dword_1DEC604() { return this.emulator.rdramRead32(this.dword_1DEC604_addr); }
    get dword_1DEC624() { return this.emulator.rdramRead32(this.dword_1DEC624_addr); }
    get dword_1DEC628() { return this.emulator.rdramRead32(this.dword_1DEC628_addr); }
    get play_time()     { return this.emulator.rdramRead32(this.play_time_addr);     }
    get total_rings()   { return this.emulator.rdramRead32(this.total_rings_addr);   }
    get dword_1DEC634() { return this.emulator.rdramRead32(this.dword_1DEC634_addr); }

    set checksum(num: number)      { this.emulator.rdramWrite32(this.checksum_addr,      num); }
    set dword_1DEC604(num: number) { this.emulator.rdramWrite32(this.dword_1DEC604_addr, num); }
    set dword_1DEC624(num: number) { this.emulator.rdramWrite32(this.dword_1DEC624_addr, num); }
    set dword_1DEC628(num: number) { this.emulator.rdramWrite32(this.dword_1DEC628_addr, num); }
    set play_time(num: number)     { this.emulator.rdramWrite32(this.play_time_addr,     num); }
    set total_rings(num: number)   { this.emulator.rdramWrite32(this.total_rings_addr,   num); }
    set dword_1DEC634(num: number) { this.emulator.rdramWrite32(this.dword_1DEC634_addr, num); }

    // gaps 'n' shit
    get gap_14()   { return this.emulator.rdramReadBuffer(this.gap_14_addr,   0x8);  }
    get gap_2fd9() { return this.emulator.rdramReadBuffer(this.gap_2fd9_addr, 0x17); }
    get gap_309d() { return this.emulator.rdramReadBuffer(this.gap_309d_addr, 0x17); }
    get gap_3161() { return this.emulator.rdramReadBuffer(this.gap_3161_addr, 0x17); }

    set gap_14(buf: Buffer)   { this.emulator.rdramWriteBuffer(this.gap_14_addr,   buf); }
    set gap_2fd9(buf: Buffer) { this.emulator.rdramWriteBuffer(this.gap_2fd9_addr, buf); }
    set gap_309d(buf: Buffer) { this.emulator.rdramWriteBuffer(this.gap_309d_addr, buf); }
    set gap_3161(buf: Buffer) { this.emulator.rdramWriteBuffer(this.gap_3161_addr, buf); }
}