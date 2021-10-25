import { current_game } from '../../SACore';
import { JSONTemplate } from 'modloader64_api/JSONTemplate';
import { ChaoAPI } from '../../../API/imports';
import { ILogger, IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import IMemory from 'modloader64_api/IMemory';

export class ChaoDNA extends JSONTemplate implements ChaoAPI.IChaoDNA {
    private ModLoader: IModLoaderAPI;
    private emulator: IMemory;
    private instance: number;
    private slot: number;
    private get reset_trigger_addr()            { return this.instance + (this.slot * 0x800) + 0x438 + 0x00; }
    private get field_1_addr()                  { return this.instance + (this.slot * 0x800) + 0x438 + 0x01; }
    private get swim_stat_grade1_addr()         { return this.instance + (this.slot * 0x800) + 0x438 + 0x5C; }
    private get swim_stat_grade2_addr()         { return this.instance + (this.slot * 0x800) + 0x438 + 0x5D; }
    private get fly_stat_grade1_addr()          { return this.instance + (this.slot * 0x800) + 0x438 + 0x5E; }
    private get fly_stat_grade2_addr()          { return this.instance + (this.slot * 0x800) + 0x438 + 0x5F; }
    private get run_stat_grade1_addr()          { return this.instance + (this.slot * 0x800) + 0x438 + 0x60; }
    private get run_stat_grade2_addr()          { return this.instance + (this.slot * 0x800) + 0x438 + 0x61; }
    private get power_stat_grade1_addr()        { return this.instance + (this.slot * 0x800) + 0x438 + 0x62; }
    private get power_stat_grade2_addr()        { return this.instance + (this.slot * 0x800) + 0x438 + 0x63; }
    private get stamina_stat_grade1_addr()      { return this.instance + (this.slot * 0x800) + 0x438 + 0x64; }
    private get stamina_stat_grade2_addr()      { return this.instance + (this.slot * 0x800) + 0x438 + 0x65; }
    private get luck_stat_grade1_addr()         { return this.instance + (this.slot * 0x800) + 0x438 + 0x66; }
    private get luck_stat_grade2_addr()         { return this.instance + (this.slot * 0x800) + 0x438 + 0x67; }
    private get intelligence_stat_grade1_addr() { return this.instance + (this.slot * 0x800) + 0x438 + 0x68; }
    private get intelligence_stat_grade2_addr() { return this.instance + (this.slot * 0x800) + 0x438 + 0x69; }
    private get unknown_stat_grade1_addr()      { return this.instance + (this.slot * 0x800) + 0x438 + 0x6A; }
    private get unknown_stat_grade2_addr()      { return this.instance + (this.slot * 0x800) + 0x438 + 0x6B; }
    private get field_6C_addr()                 { return this.instance + (this.slot * 0x800) + 0x438 + 0x6C; }
    private get favorite_fruit1_addr()          { return this.instance + (this.slot * 0x800) + 0x438 + 0x8E; }
    private get favorite_fruit2_addr()          { return this.instance + (this.slot * 0x800) + 0x438 + 0x8F; }
    private get field_90_addr()                 { return this.instance + (this.slot * 0x800) + 0x438 + 0x90; }
    private get color1_addr()                   { return this.instance + (this.slot * 0x800) + 0x438 + 0x94; }
    private get color2_addr()                   { return this.instance + (this.slot * 0x800) + 0x438 + 0x95; }
    private get monotone_flag1_addr()           { return this.instance + (this.slot * 0x800) + 0x438 + 0x96; }
    private get monotone_flag2_addr()           { return this.instance + (this.slot * 0x800) + 0x438 + 0x97; }
    private get texture1_addr()                 { return this.instance + (this.slot * 0x800) + 0x438 + 0x98; }
    private get texture2_addr()                 { return this.instance + (this.slot * 0x800) + 0x438 + 0x99; }
    private get shiny_flag1_addr()              { return this.instance + (this.slot * 0x800) + 0x438 + 0x9A; }
    private get shiny_flag2_addr()              { return this.instance + (this.slot * 0x800) + 0x438 + 0x9B; }
    private get egg_color1_addr()               { return this.instance + (this.slot * 0x800) + 0x438 + 0x9C; }
    private get egg_color2_addr()               { return this.instance + (this.slot * 0x800) + 0x438 + 0x9D; }
    private get gap_9E_addr()                   { return this.instance + (this.slot * 0x800) + 0x438 + 0x9E; }
    
    constructor(ModLoader: IModLoaderAPI, slot: number) {
        super();
        this.ModLoader = ModLoader;
        this.emulator = ModLoader.emulator;
        this.instance = current_game.chao_data;
        this.slot = slot;
    }

    jsonFields: string[] = [
        "reset_trigger",           
        "swim_stat_grade1",        
        "swim_stat_grade2",        
        "fly_stat_grade1",         
        "fly_stat_grade2",         
        "run_stat_grade1",         
        "run_stat_grade2",         
        "power_stat_grade1",       
        "power_stat_grade2",       
        "stamina_stat_grade1",     
        "stamina_stat_grade2",     
        "luck_stat_grade1",        
        "luck_stat_grade2",        
        "intelligence_stat_grade1",
        "intelligence_stat_grade2",
        "unknown_stat_grade1",     
        "unknown_stat_grade2",     
        "favorite_fruit1",         
        "favorite_fruit2",         
        "color1",                  
        "color2",                  
        "monotone_flag1",          
        "monotone_flag2",          
        "texture1",                
        "texture2",                
        "shiny_flag1",             
        "shiny_flag2",             
        "egg_color1",              
        "egg_color2",      
    ];

            

    // chars
    get reset_trigger()            { return this.emulator.rdramRead8(this.reset_trigger_addr) !== 0;      }
    get swim_stat_grade1()         { return this.emulator.rdramRead8(this.swim_stat_grade1_addr);         }
    get swim_stat_grade2()         { return this.emulator.rdramRead8(this.swim_stat_grade2_addr);         }
    get fly_stat_grade1()          { return this.emulator.rdramRead8(this.fly_stat_grade1_addr);          }
    get fly_stat_grade2()          { return this.emulator.rdramRead8(this.fly_stat_grade2_addr);          }
    get run_stat_grade1()          { return this.emulator.rdramRead8(this.run_stat_grade1_addr);          }
    get run_stat_grade2()          { return this.emulator.rdramRead8(this.run_stat_grade2_addr);          }
    get power_stat_grade1()        { return this.emulator.rdramRead8(this.power_stat_grade1_addr);        }
    get power_stat_grade2()        { return this.emulator.rdramRead8(this.power_stat_grade2_addr);        }
    get stamina_stat_grade1()      { return this.emulator.rdramRead8(this.stamina_stat_grade1_addr);      }
    get stamina_stat_grade2()      { return this.emulator.rdramRead8(this.stamina_stat_grade2_addr);      }
    get luck_stat_grade1()         { return this.emulator.rdramRead8(this.luck_stat_grade1_addr);         }
    get luck_stat_grade2()         { return this.emulator.rdramRead8(this.luck_stat_grade2_addr);         }
    get intelligence_stat_grade1() { return this.emulator.rdramRead8(this.intelligence_stat_grade1_addr); }
    get intelligence_stat_grade2() { return this.emulator.rdramRead8(this.intelligence_stat_grade2_addr); }
    get unknown_stat_grade1()      { return this.emulator.rdramRead8(this.unknown_stat_grade1_addr);      }
    get unknown_stat_grade2()      { return this.emulator.rdramRead8(this.unknown_stat_grade2_addr);      }
    get favorite_fruit1()          { return this.emulator.rdramRead8(this.favorite_fruit1_addr);          }
    get favorite_fruit2()          { return this.emulator.rdramRead8(this.favorite_fruit2_addr);          }
    get color1()                   { return this.emulator.rdramRead8(this.color1_addr);                   }
    get color2()                   { return this.emulator.rdramRead8(this.color2_addr);                   }
    get monotone_flag1()           { return this.emulator.rdramRead8(this.monotone_flag1_addr) !== 0;     }
    get monotone_flag2()           { return this.emulator.rdramRead8(this.monotone_flag2_addr) !== 0;     }
    get texture1()                 { return this.emulator.rdramRead8(this.texture1_addr);                 }
    get texture2()                 { return this.emulator.rdramRead8(this.texture2_addr);                 }
    get shiny_flag1()              { return this.emulator.rdramRead8(this.shiny_flag1_addr) !== 0;        }
    get shiny_flag2()              { return this.emulator.rdramRead8(this.shiny_flag2_addr) !== 0;        }
    get egg_color1()               { return this.emulator.rdramRead8(this.egg_color1_addr);               }
    get egg_color2()               { return this.emulator.rdramRead8(this.egg_color2_addr);               }

    set reset_trigger(flag: boolean)          { this.emulator.rdramWrite8(this.reset_trigger_addr,   flag ? 1 : 0); }
    set swim_stat_grade1(num: number)         { this.emulator.rdramWrite8(this.swim_stat_grade1_addr,         num); }
    set swim_stat_grade2(num: number)         { this.emulator.rdramWrite8(this.swim_stat_grade2_addr,         num); }
    set fly_stat_grade1(num: number)          { this.emulator.rdramWrite8(this.fly_stat_grade1_addr,          num); }
    set fly_stat_grade2(num: number)          { this.emulator.rdramWrite8(this.fly_stat_grade2_addr,          num); }
    set run_stat_grade1(num: number)          { this.emulator.rdramWrite8(this.run_stat_grade1_addr,          num); }
    set run_stat_grade2(num: number)          { this.emulator.rdramWrite8(this.run_stat_grade2_addr,          num); }
    set power_stat_grade1(num: number)        { this.emulator.rdramWrite8(this.power_stat_grade1_addr,        num); }
    set power_stat_grade2(num: number)        { this.emulator.rdramWrite8(this.power_stat_grade2_addr,        num); }
    set stamina_stat_grade1(num: number)      { this.emulator.rdramWrite8(this.stamina_stat_grade1_addr,      num); }
    set stamina_stat_grade2(num: number)      { this.emulator.rdramWrite8(this.stamina_stat_grade2_addr,      num); }
    set luck_stat_grade1(num: number)         { this.emulator.rdramWrite8(this.luck_stat_grade1_addr,         num); }
    set luck_stat_grade2(num: number)         { this.emulator.rdramWrite8(this.luck_stat_grade2_addr,         num); }
    set intelligence_stat_grade1(num: number) { this.emulator.rdramWrite8(this.intelligence_stat_grade1_addr, num); }
    set intelligence_stat_grade2(num: number) { this.emulator.rdramWrite8(this.intelligence_stat_grade2_addr, num); }
    set unknown_stat_grade1(num: number)      { this.emulator.rdramWrite8(this.unknown_stat_grade1_addr,      num); }
    set unknown_stat_grade2(num: number)      { this.emulator.rdramWrite8(this.unknown_stat_grade2_addr,      num); }
    set favorite_fruit1(num: number)          { this.emulator.rdramWrite8(this.favorite_fruit1_addr,          num); }
    set favorite_fruit2(num: number)          { this.emulator.rdramWrite8(this.favorite_fruit2_addr,          num); }
    set color1(num: number)                   { this.emulator.rdramWrite8(this.color1_addr,                   num); }
    set color2(num: number)                   { this.emulator.rdramWrite8(this.color2_addr,                   num); }
    set monotone_flag1(flag: boolean)         { this.emulator.rdramWrite8(this.monotone_flag1_addr,  flag ? 1 : 0); }
    set monotone_flag2(flag: boolean)         { this.emulator.rdramWrite8(this.monotone_flag2_addr,  flag ? 1 : 0); }
    set texture1(num: number)                 { this.emulator.rdramWrite8(this.texture1_addr,                 num); }
    set texture2(num: number)                 { this.emulator.rdramWrite8(this.texture2_addr,                 num); }
    set shiny_flag1(flag: boolean)            { this.emulator.rdramWrite8(this.shiny_flag1_addr,     flag ? 1 : 0); }
    set shiny_flag2(flag: boolean)            { this.emulator.rdramWrite8(this.shiny_flag2_addr,     flag ? 1 : 0); }
    set egg_color1(num: number)               { this.emulator.rdramWrite8(this.egg_color1_addr,               num); }
    set egg_color2(num: number)               { this.emulator.rdramWrite8(this.egg_color2_addr,               num); }

    // random unnamed gaps and fields
    get field_1()  { return this.emulator.rdramReadBuffer(this.field_1_addr,  0x5B); }
    get field_6C() { return this.emulator.rdramReadBuffer(this.field_6C_addr, 0x22); }
    get field_90() { return this.emulator.rdramReadBuffer(this.field_90_addr, 0x4);  }
    get gap_9E()   { return this.emulator.rdramReadBuffer(this.gap_9E_addr,   0x6);  }

    set field_1(buf: Buffer)  { this.emulator.rdramWriteBuffer(this.field_1_addr,  buf); }
    set field_6C(buf: Buffer) { this.emulator.rdramWriteBuffer(this.field_6C_addr, buf); }
    set field_90(buf: Buffer) { this.emulator.rdramWriteBuffer(this.field_90_addr, buf); }
    set gap_9E(buf: Buffer)   { this.emulator.rdramWriteBuffer(this.gap_9E_addr,   buf); }
}