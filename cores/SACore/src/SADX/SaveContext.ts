// import { current_game } from '../../SACore';
import { JSONTemplate } from 'modloader64_api/JSONTemplate';
import { ILogger, IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import * as API from "../../API/imports";
import IMemory from 'modloader64_api/IMemory';
import { Time } from '../Common/CommonClasses'
import { FakeArray16, FakeArray32, FakeArray8, FakeArrayAdventureData, FakeArrayTime, FakeArrayTwinkleCircuitTimes, IFakeArray } from '../Common/types/FakeArray';

export class TwinkleCircuitTimes extends JSONTemplate implements API.SADX.ITwinkleCircuitTimes {
    private ModLoader: IModLoaderAPI;
    private emulator: IMemory;
    private instance: number;
    private get best_times_addr() { return this.instance + 0x0; }
    private get lap1_time_addr()  { return this.instance + 0x9; }
    private get lap2_time_addr()  { return this.instance + 0xC; }

    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: number) {
        super();
        this.ModLoader = ModLoader;
        this.emulator = ModLoader.emulator;
        this.instance = address;
    }

    jsonFields: string[] = [
        'best_times',
        'lap1_time',
        'lap2_time'
    ];

    get best_times() { return new FakeArrayTime(this.ModLoader, this.ModLoader.logger, this.best_times_addr, 3); }
    get lap1_time()  { return new Time(this.ModLoader,          this.ModLoader.logger, this.lap1_time_addr);     }
    get lap2_time()  { return new Time(this.ModLoader,          this.ModLoader.logger, this.lap2_time_addr);     }
}

export class AdventureData extends JSONTemplate implements API.SADX.IAdventureData {
    private ModLoader: IModLoaderAPI;
    private emulator: IMemory;
    private instance: number;
    private get time_of_day_addr() { return this.instance + 0x0; }
    private get field_1_addr()     { return this.instance + 0x1; }
    private get field_2_addr()     { return this.instance + 0x2; }
    private get field_4_addr()     { return this.instance + 0x4; }
    private get entrance_addr()    { return this.instance + 0x6; }
    private get level_act_addr()   { return this.instance + 0x8; }
    private get field_A_addr()     { return this.instance + 0xA; }

    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: number) {
        super();
        this.ModLoader = ModLoader;
        this.emulator = ModLoader.emulator;
        this.instance = address;
    }

    jsonFields: string[] = [
        'time_of_day',
        'field_1',
        'field_2',
        'field_4',
        'entrance',
        'level_act',
        'field_A'
    ];

    get time_of_day() { return this.emulator.rdramRead8(this.time_of_day_addr);       }
    get field_1()     { return this.emulator.rdramReadBuffer(this.field_1_addr, 0x1); }
    get field_2()     { return this.emulator.rdramReadBuffer(this.field_2_addr, 0x2); }
    get field_4()     { return this.emulator.rdramReadBuffer(this.field_4_addr, 0x2); }
    get entrance()    { return this.emulator.rdramRead16(this.entrance_addr);         }
    get level_act()   { return this.emulator.rdramRead16(this.level_act_addr);        }
    get field_A()     { return this.emulator.rdramReadBuffer(this.field_A_addr, 0x2); }

    set time_of_day(num: number) { this.emulator.rdramWrite8(this.time_of_day_addr,  num); }
    set field_1(buf: Buffer)     { this.emulator.rdramWriteBuffer(this.field_1_addr, buf); }
    set field_2(buf: Buffer)     { this.emulator.rdramWriteBuffer(this.field_2_addr, buf); }
    set field_4(buf: Buffer)     { this.emulator.rdramWriteBuffer(this.field_4_addr, buf); }
    set entrance(num: number)    { this.emulator.rdramWrite16(this.entrance_addr,    num); }
    set level_act(num: number)   { this.emulator.rdramWrite16(this.level_act_addr,   num); }
    set field_A(buf: Buffer)     { this.emulator.rdramWriteBuffer(this.field_A_addr, buf); }
}

export class SaveContext extends JSONTemplate implements API.SADX.ISaveContext {
    private ModLoader: IModLoaderAPI;
    private emulator: IMemory;
    private instance: number = 0x807A83EC;
    private get checksum_addr()                         { return this.instance + 0x000; }
    private get play_time_addr()                        { return this.instance + 0x004; }
    private get high_scores_addr()                      { return this.instance + 0x008; }
    private get best_times_addr()                       { return this.instance + 0x088; }
    private get best_weights_addr()                     { return this.instance + 0x0DC; }
    private get anonymous_4_addr()                      { return this.instance + 0x0F4; }
    private get most_rings_addr()                       { return this.instance + 0x104; }
    private get sky_chase1_high_scores_addr()           { return this.instance + 0x144; }
    private get sky_chase2_high_scores_addr()           { return this.instance + 0x15C; }
    private get ice_cap_high_scores_addr()              { return this.instance + 0x174; }
    private get sand_hill_high_scores_addr()            { return this.instance + 0x18C; }
    private get hedgehog_hammer_high_score1_addr()      { return this.instance + 0x1A4; }
    private get hedgehog_hammer_high_score2_addr()      { return this.instance + 0x1A8; }
    private get hedgehog_hammer_high_score3_addr()      { return this.instance + 0x1AC; }
    private get twinkle_circuit_best_times_addr()       { return this.instance + 0x1B0; }
    private get boss_best_times_addr()                  { return this.instance + 0x20A; }
    private get emblems_addr()                          { return this.instance + 0x240; }
    private get options_addr()                          { return this.instance + 0x251; }
    private get lives_addr()                            { return this.instance + 0x252; }
    private get last_character_addr()                   { return this.instance + 0x259; }
    private get rumble_addr()                           { return this.instance + 0x25A; }
    private get gap_25b_addr()                          { return this.instance + 0x25B; }
    private get last_level_addr()                       { return this.instance + 0x25C; }
    private get gap_25e_addr()                          { return this.instance + 0x25E; }
    private get event_flags_addr()                      { return this.instance + 0x260; }
    private get npc_flags_addr()                        { return this.instance + 0x2A0; }
    private get gap_2e0_addr()                          { return this.instance + 0x2E0; }
    private get adventure_data_addr()                   { return this.instance + 0x2E8; }
    private get level_clear_addr()                      { return this.instance + 0x348; }
    private get mission_flags_addr()                    { return this.instance + 0x4A0; }
    private get black_market_rings_addr()               { return this.instance + 0x4DC; }
    private get metal_high_scores_addr()                { return this.instance + 0x4E0; }
    private get metal_best_times_addr()                 { return this.instance + 0x508; }
    private get metal_most_rings_addr()                 { return this.instance + 0x526; }
    private get gap_53a_addr()                          { return this.instance + 0x53A; }
    private get metal_ice_cap_high_scores_addr()        { return this.instance + 0x53C; }
    private get metal_sand_hill_high_scores_addr()      { return this.instance + 0x548; }
    private get metal_twinkle_circuit_best_times_addr() { return this.instance + 0x554; }
    private get metal_boss_best_times_addr()            { return this.instance + 0x563; }
    private get metal_emblems_addr()                    { return this.instance + 0x56C; }

    high_scores: IFakeArray<number>;
    best_times: IFakeArray<API.Common.ITime>;
    best_weights: IFakeArray<number>;
    most_rings: IFakeArray<number>;
    sky_chase1_high_scores: IFakeArray<number>;
    sky_chase2_high_scores: IFakeArray<number>;
    ice_cap_high_scores: IFakeArray<number>;
    sand_hill_high_scores: IFakeArray<number>;
    twinkle_circuit_best_times: IFakeArray<API.SADX.ITwinkleCircuitTimes>;
    boss_best_times: IFakeArray<API.Common.ITime>;
    emblems: IFakeArray<number>;
    lives: IFakeArray<number>;
    // event_flags: IFakeArray<number>;
    npc_flags: IFakeArray<number>;
    adventure_data: IFakeArray<API.SADX.IAdventureData>;
    level_clear: IFakeArray<number>;
    mission_flags: IFakeArray<number>;
    metal_high_scores: IFakeArray<number>;
    metal_best_times: IFakeArray<API.Common.ITime>;
    metal_most_rings: IFakeArray<number>;
    metal_ice_cap_high_scores: IFakeArray<number>;
    metal_sand_hill_high_scores: IFakeArray<number>;
    metal_boss_best_times: IFakeArray<API.Common.ITime>;

    constructor(ModLoader: IModLoaderAPI, log: ILogger) {
        super();
        this.ModLoader = ModLoader;
        this.emulator = ModLoader.emulator;

        this.high_scores                 = new FakeArray32(ModLoader, log, this.high_scores_addr, 32);
        this.best_times                  = new FakeArrayTime(ModLoader, log, this.best_times_addr, 28);
        this.best_weights                = new FakeArray16(ModLoader, log, this.best_weights_addr, 12);
        this.most_rings                  = new FakeArray16(ModLoader, log, this.most_rings_addr, 32);
        this.sky_chase1_high_scores      = new FakeArray32(ModLoader, log, this.sky_chase1_high_scores_addr, 6);
        this.sky_chase2_high_scores      = new FakeArray32(ModLoader, log, this.sky_chase2_high_scores_addr, 6);
        this.ice_cap_high_scores         = new FakeArray32(ModLoader, log, this.ice_cap_high_scores_addr, 6);
        this.sand_hill_high_scores       = new FakeArray32(ModLoader, log, this.sand_hill_high_scores_addr, 6);
        this.twinkle_circuit_best_times  = new FakeArrayTwinkleCircuitTimes(ModLoader, log, this.twinkle_circuit_best_times_addr, 6);
        this.boss_best_times             = new FakeArrayTime(ModLoader, log, this.boss_best_times_addr, 18);
        this.emblems                     = new FakeArray8(ModLoader, log, this.emblems_addr, 17);
        this.lives                       = new FakeArray8(ModLoader, log, this.lives_addr, 7);
        // this.event_flags                 = new FakeArray8(ModLoader, log, this.event_flags_addr, 64);
        this.npc_flags                   = new FakeArray8(ModLoader, log, this.npc_flags_addr, 64);
        this.adventure_data              = new FakeArrayAdventureData(ModLoader, log, this.adventure_data_addr, 8);
        this.level_clear                 = new FakeArray8(ModLoader, log, this.level_clear_addr, 344);
        this.mission_flags               = new FakeArray8(ModLoader, log, this.mission_flags_addr, 60);
        this.metal_high_scores           = new FakeArray32(ModLoader, log, this.metal_high_scores_addr, 10);
        this.metal_best_times            = new FakeArrayTime(ModLoader, log, this.metal_best_times_addr, 10);
        this.metal_most_rings            = new FakeArray16(ModLoader, log, this.metal_most_rings_addr, 10);
        this.metal_ice_cap_high_scores   = new FakeArray32(ModLoader, log, this.metal_ice_cap_high_scores_addr, 3)
        this.metal_sand_hill_high_scores = new FakeArray32(ModLoader, log, this.metal_sand_hill_high_scores_addr, 3)
        this.metal_boss_best_times       = new FakeArrayTime(ModLoader, log, this.metal_boss_best_times_addr, 3);
    }

    jsonFields: string[] = [
        'checksum',
        'play_time',
        'high_scores',
        'best_times',
        'best_weights',
        'anonymous_4',
        'most_rings',
        'sky_chase1_high_scores',
        'sky_chase2_high_scores',
        'ice_cap_high_scores',
        'sand_hill_high_scores',
        'hedgehog_hammer_high_score1',
        'hedgehog_hammer_high_score2',
        'hedgehog_hammer_high_score3',
        'twinkle_circuit_best_times',
        'boss_best_times',
        'emblems',
        'options',
        'lives',
        'last_character',
        'rumble',
        'gap_25b',
        'last_level',
        'gap_25e',
        'event_flags',
        'npc_flags',
        'gap_2e0',
        'adventure_data',
        'level_clear',
        'mission_flags',
        'black_market_rings',
        'metal_high_scores',
        'metal_best_times',
        'metal_most_rings',
        'gap_53a',
        'metal_ice_cap_high_scores',
        'metal_sand_hill_high_scores',
        'metal_twinkle_circuit_best_times',
        'metal_boss_best_times',
        'metal_emblems'
    ];

    // chars
    get options()        { return this.emulator.rdramRead8(this.options_addr);        }
    get last_character() { return this.emulator.rdramRead8(this.last_character_addr); }
    get rumble()         { return this.emulator.rdramRead8(this.rumble_addr);         }

    set options(num: number)        { this.emulator.rdramWrite8(this.options_addr,        num); }
    set last_character(num: number) { this.emulator.rdramWrite8(this.last_character_addr, num); }
    set rumble(num: number)         { this.emulator.rdramWrite8(this.rumble_addr,         num); }

    // shorts
    get last_level() { return this.emulator.rdramRead16(this.last_level_addr); }

    set last_level(num: number) { this.emulator.rdramWrite16(this.last_level_addr, num); }

    // ints
    get checksum()                    { return this.emulator.rdramRead32(this.checksum_addr);                    }
    get play_time()                   { return this.emulator.rdramRead32(this.play_time_addr);                   }
    get hedgehog_hammer_high_score1() { return this.emulator.rdramRead32(this.hedgehog_hammer_high_score1_addr); }
    get hedgehog_hammer_high_score2() { return this.emulator.rdramRead32(this.hedgehog_hammer_high_score2_addr); }
    get hedgehog_hammer_high_score3() { return this.emulator.rdramRead32(this.hedgehog_hammer_high_score3_addr); }
    get black_market_rings()          { return this.emulator.rdramRead32(0x807A83A8);           } //Live ring count
    get metal_emblems()               { return this.emulator.rdramRead32(this.metal_emblems_addr);               }

    set checksum(num: number)                    { this.emulator.rdramWrite32(this.checksum_addr,                    num); }
    set play_time(num: number)                   { this.emulator.rdramWrite32(this.play_time_addr,                   num); }
    set hedgehog_hammer_high_score1(num: number) { this.emulator.rdramWrite32(this.hedgehog_hammer_high_score1_addr, num); }
    set hedgehog_hammer_high_score2(num: number) { this.emulator.rdramWrite32(this.hedgehog_hammer_high_score2_addr, num); }
    set hedgehog_hammer_high_score3(num: number) { this.emulator.rdramWrite32(this.hedgehog_hammer_high_score3_addr, num); }
    set black_market_rings(num: number)          { this.emulator.rdramWrite32(this.black_market_rings_addr,          num);
                                                   this.emulator.rdramWrite32(0x807A83A8, num); }//Live ring count
    set metal_emblems(num: number)               { this.emulator.rdramWrite32(this.metal_emblems_addr,               num); }

    // gaps 'n' shit
    get anonymous_4() { return this.emulator.rdramReadBuffer(this.anonymous_4_addr,     0x10); }
    get gap_25b()     { return this.emulator.rdramReadBuffer(this.gap_25b_addr,         0x1);  }
    get gap_25e()     { return this.emulator.rdramReadBuffer(this.gap_25e_addr,         0x2);  }
    get gap_2e0()     { return this.emulator.rdramReadBuffer(this.gap_2e0_addr,         0x8);  }
    get gap_53a()     { return this.emulator.rdramReadBuffer(this.gap_53a_addr,         0x2);  }
    get event_flags() { return this.emulator.rdramReadBuffer(this.event_flags_addr,     0x40); }
    get metal_twinkle_circuit_best_times() { return new TwinkleCircuitTimes(this.ModLoader, this.ModLoader.logger, this.metal_twinkle_circuit_best_times_addr); }

    set anonymous_4(buf: Buffer) { this.emulator.rdramWriteBuffer(this.anonymous_4_addr, buf); }
    set gap_25b(buf: Buffer)     { this.emulator.rdramWriteBuffer(this.gap_25b_addr,     buf); }
    set gap_25e(buf: Buffer)     { this.emulator.rdramWriteBuffer(this.gap_25e_addr,     buf); }
    set gap_2e0(buf: Buffer)     { this.emulator.rdramWriteBuffer(this.gap_2e0_addr,     buf); }
    set gap_53a(buf: Buffer)     { this.emulator.rdramWriteBuffer(this.gap_53a_addr,     buf); }
    set event_flags(buf: Buffer) { this.emulator.rdramWriteBuffer(this.event_flags_addr, buf); }
}