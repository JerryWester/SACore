import { JSONTemplate } from "modloader64_api/JSONTemplate";
import { ILogger, IModLoaderAPI } from "modloader64_api/IModLoaderAPI";
import { ChaoAPI } from "../../../API/imports";
import IMemory from "modloader64_api/IMemory";
import { FlagManager, Flag } from 'modloader64_api/FlagManager';
import { current_game } from '../../SACore';

export class SADXAnimalFlags extends JSONTemplate implements ChaoAPI.ISADXAnimalFlags {
    private ModLoader: IModLoaderAPI;
    private emulator: IMemory;
    private instance: number;
    private slot: number;
    private flag_manager: FlagManager;
    private get flags_addr() { return this.instance + (this.slot * 0x800) + 0x4E0; }
    
    constructor(ModLoader: IModLoaderAPI, log: ILogger, slot: number) {
        super();
        this.ModLoader = ModLoader;
        this.emulator = ModLoader.emulator;
        this.instance = current_game.chao_data;
        this.slot = slot;
        this.flag_manager = new FlagManager(this.emulator, this.flags_addr);
    }
    
    jsonFields: string[] = [
        'skunk',
        'koala',
        'mole',
        'elephant',
        'lion',
        'gorilla',
        'kangaroo',
        'rabbit',
        'deer',
        'parrot',
        'swallow',
        'peacock',
        'otter',
        'penguin',
        'seal'
    ];
    
    private seal_flag     = new Flag(0x3, 0o7);
    private penguin_flag  = new Flag(0x3, 0o6);
    private otter_flag    = new Flag(0x3, 0o5);
    private peacock_flag  = new Flag(0x3, 0o4);
    private swallow_flag  = new Flag(0x3, 0o3);
    private parrot_flag   = new Flag(0x3, 0o2);
    private deer_flag     = new Flag(0x3, 0o1);
    private rabbit_flag   = new Flag(0x3, 0o0);
    private kangaroo_flag = new Flag(0x2, 0o7);
    private gorilla_flag  = new Flag(0x2, 0o6);
    private lion_flag     = new Flag(0x2, 0o5);
    private elephant_flag = new Flag(0x2, 0o4);
    private mole_flag     = new Flag(0x2, 0o3);
    private koala_flag    = new Flag(0x2, 0o2);
    private skunk_flag    = new Flag(0x2, 0o1);
    
    get skunk()    { return this.flag_manager.isFlagSet(this.skunk_flag);    }
    get koala()    { return this.flag_manager.isFlagSet(this.koala_flag);    }
    get mole()     { return this.flag_manager.isFlagSet(this.mole_flag);     }
    get elephant() { return this.flag_manager.isFlagSet(this.elephant_flag); }
    get lion()     { return this.flag_manager.isFlagSet(this.lion_flag);     }
    get gorilla()  { return this.flag_manager.isFlagSet(this.gorilla_flag);  }
    get kangaroo() { return this.flag_manager.isFlagSet(this.kangaroo_flag); }
    get rabbit()   { return this.flag_manager.isFlagSet(this.rabbit_flag);   }
    get deer()     { return this.flag_manager.isFlagSet(this.deer_flag);     }
    get parrot()   { return this.flag_manager.isFlagSet(this.parrot_flag);   }
    get swallow()  { return this.flag_manager.isFlagSet(this.swallow_flag);  }
    get peacock()  { return this.flag_manager.isFlagSet(this.peacock_flag);  }
    get otter()    { return this.flag_manager.isFlagSet(this.otter_flag);    }
    get penguin()  { return this.flag_manager.isFlagSet(this.penguin_flag);  }
    get seal()     { return this.flag_manager.isFlagSet(this.seal_flag);     }
    
    set skunk(flag: boolean)    { this.flag_manager.setFlag(this.skunk_flag,    flag); }
    set koala(flag: boolean)    { this.flag_manager.setFlag(this.koala_flag,    flag); }
    set mole(flag: boolean)     { this.flag_manager.setFlag(this.mole_flag,     flag); }
    set elephant(flag: boolean) { this.flag_manager.setFlag(this.elephant_flag, flag); }
    set lion(flag: boolean)     { this.flag_manager.setFlag(this.lion_flag,     flag); }
    set gorilla(flag: boolean)  { this.flag_manager.setFlag(this.gorilla_flag,  flag); }
    set kangaroo(flag: boolean) { this.flag_manager.setFlag(this.kangaroo_flag, flag); }
    set rabbit(flag: boolean)   { this.flag_manager.setFlag(this.rabbit_flag,   flag); }
    set deer(flag: boolean)     { this.flag_manager.setFlag(this.deer_flag,     flag); }
    set parrot(flag: boolean)   { this.flag_manager.setFlag(this.parrot_flag,   flag); }
    set swallow(flag: boolean)  { this.flag_manager.setFlag(this.swallow_flag,  flag); }
    set peacock(flag: boolean)  { this.flag_manager.setFlag(this.peacock_flag,  flag); }
    set otter(flag: boolean)    { this.flag_manager.setFlag(this.otter_flag,    flag); }
    set penguin(flag: boolean)  { this.flag_manager.setFlag(this.penguin_flag,  flag); }
    set seal(flag: boolean)     { this.flag_manager.setFlag(this.seal_flag,     flag); }
}

export class SA2BAnimalFlags extends JSONTemplate implements ChaoAPI.ISA2BAnimalFlags {
    private ModLoader: IModLoaderAPI;
    private emulator: IMemory;
    private instance: number;
    private slot: number;
    private flag_manager: FlagManager;
    private get flags_addr() { return this.instance + (this.slot * 0x800) + 0x4E0; }
    
    constructor(ModLoader: IModLoaderAPI, log: ILogger, slot: number) {
        super();
        this.ModLoader = ModLoader;
        this.emulator = ModLoader.emulator;
        this.instance = current_game.chao_data;
        this.slot = slot;
        this.flag_manager = new FlagManager(this.emulator, this.flags_addr);
    }
    
    jsonFields: string[] = [
        'penguin',
        'seal',
        'otter',
        'rabbit',
        'cheetah',
        'boar',
        'bear',
        'tiger',
        'gorilla',
        'peacock',
        'parrot',
        'condor',
        'skunk',
        'sheep',
        'raccoon',
        'half_fish',
        'skeleton_dog',
        'bat',
        'dragon',
        'unicorn',
        'phoenix'
    ];
    
    private penguin_flag      = new Flag(0x3, 0o7);
    private seal_flag         = new Flag(0x3, 0o6);
    private otter_flag        = new Flag(0x3, 0o5);
    private rabbit_flag       = new Flag(0x3, 0o4);
    private cheetah_flag      = new Flag(0x3, 0o3);
    private boar_flag         = new Flag(0x3, 0o2);
    private bear_flag         = new Flag(0x3, 0o1);
    private tiger_flag        = new Flag(0x3, 0o0);
    private gorilla_flag      = new Flag(0x2, 0o7);
    private peacock_flag      = new Flag(0x2, 0o6);
    private parrot_flag       = new Flag(0x2, 0o5);
    private condor_flag       = new Flag(0x2, 0o4);
    private skunk_flag        = new Flag(0x2, 0o3);
    private sheep_flag        = new Flag(0x2, 0o2);
    private raccoon_flag      = new Flag(0x2, 0o1);
    private half_fish_flag    = new Flag(0x2, 0o0);
    private skeleton_dog_flag = new Flag(0x1, 0o7);
    private bat_flag          = new Flag(0x1, 0o6);
    private dragon_flag       = new Flag(0x1, 0o5);
    private unicorn_flag      = new Flag(0x1, 0o4);
    private phoenix_flag      = new Flag(0x1, 0o3);
    
    get penguin()      { return this.flag_manager.isFlagSet(this.penguin_flag);      }
    get seal()         { return this.flag_manager.isFlagSet(this.seal_flag);         }
    get otter()        { return this.flag_manager.isFlagSet(this.otter_flag);        }
    get rabbit()       { return this.flag_manager.isFlagSet(this.rabbit_flag);       }
    get cheetah()      { return this.flag_manager.isFlagSet(this.cheetah_flag);      }
    get boar()         { return this.flag_manager.isFlagSet(this.boar_flag);         }
    get bear()         { return this.flag_manager.isFlagSet(this.bear_flag);         }
    get tiger()        { return this.flag_manager.isFlagSet(this.tiger_flag);        }
    get gorilla()      { return this.flag_manager.isFlagSet(this.gorilla_flag);      }
    get peacock()      { return this.flag_manager.isFlagSet(this.peacock_flag);      }
    get parrot()       { return this.flag_manager.isFlagSet(this.parrot_flag);       }
    get condor()       { return this.flag_manager.isFlagSet(this.condor_flag);       }
    get skunk()        { return this.flag_manager.isFlagSet(this.skunk_flag);        }
    get sheep()        { return this.flag_manager.isFlagSet(this.sheep_flag);        }
    get raccoon()      { return this.flag_manager.isFlagSet(this.raccoon_flag);      }
    get half_fish()    { return this.flag_manager.isFlagSet(this.half_fish_flag);    }
    get skeleton_dog() { return this.flag_manager.isFlagSet(this.skeleton_dog_flag); }
    get bat()          { return this.flag_manager.isFlagSet(this.bat_flag);          }
    get dragon()       { return this.flag_manager.isFlagSet(this.dragon_flag);       }
    get unicorn()      { return this.flag_manager.isFlagSet(this.unicorn_flag);      }
    get phoenix()      { return this.flag_manager.isFlagSet(this.phoenix_flag);      }
    
    set penguin(flag: boolean)      { this.flag_manager.setFlag(this.penguin_flag,      flag); }
    set seal(flag: boolean)         { this.flag_manager.setFlag(this.seal_flag,         flag); }
    set otter(flag: boolean)        { this.flag_manager.setFlag(this.otter_flag,        flag); }
    set rabbit(flag: boolean)       { this.flag_manager.setFlag(this.rabbit_flag,       flag); }
    set cheetah(flag: boolean)      { this.flag_manager.setFlag(this.cheetah_flag,      flag); }
    set boar(flag: boolean)         { this.flag_manager.setFlag(this.boar_flag,         flag); }
    set bear(flag: boolean)         { this.flag_manager.setFlag(this.bear_flag,         flag); }
    set tiger(flag: boolean)        { this.flag_manager.setFlag(this.tiger_flag,        flag); }
    set gorilla(flag: boolean)      { this.flag_manager.setFlag(this.gorilla_flag,      flag); }
    set peacock(flag: boolean)      { this.flag_manager.setFlag(this.peacock_flag,      flag); }
    set parrot(flag: boolean)       { this.flag_manager.setFlag(this.parrot_flag,       flag); }
    set condor(flag: boolean)       { this.flag_manager.setFlag(this.condor_flag,       flag); }
    set skunk(flag: boolean)        { this.flag_manager.setFlag(this.skunk_flag,        flag); }
    set sheep(flag: boolean)        { this.flag_manager.setFlag(this.sheep_flag,        flag); }
    set raccoon(flag: boolean)      { this.flag_manager.setFlag(this.raccoon_flag,      flag); }
    set half_fish(flag: boolean)    { this.flag_manager.setFlag(this.half_fish_flag,    flag); }
    set skeleton_dog(flag: boolean) { this.flag_manager.setFlag(this.skeleton_dog_flag, flag); }
    set bat(flag: boolean)          { this.flag_manager.setFlag(this.bat_flag,          flag); }
    set dragon(flag: boolean)       { this.flag_manager.setFlag(this.dragon_flag,       flag); }
    set unicorn(flag: boolean)      { this.flag_manager.setFlag(this.unicorn_flag,      flag); }
    set phoenix(flag: boolean)      { this.flag_manager.setFlag(this.phoenix_flag,      flag); }
}

export class ClassroomLessonFlags extends JSONTemplate implements ChaoAPI.IClassroomLessonFlags {
    private ModLoader: IModLoaderAPI;
    private emulator: IMemory;
    private instance: number;
    private slot: number;
    private flag_manager: FlagManager;
    private get flags_addr() { return this.instance + (this.slot * 0x800) + 0x4E0; }
    
    constructor(ModLoader: IModLoaderAPI, log: ILogger, slot: number) {
        super();
        this.ModLoader = ModLoader;
        this.emulator = ModLoader.emulator;
        this.instance = current_game.chao_data;
        this.slot = slot;
        this.flag_manager = new FlagManager(this.emulator, this.flags_addr);
    }
    
    jsonFields: string[] = [
        'drawing_level_1',
        'drawing_level_2',
        'drawing_level_3',
        'drawing_level_4',
        'drawing_level_5',
        'shake_dance',
        'spin_dance',
        'step_dance',
        'go_go_dance',
        'exercise',
        'song_level_1',
        'song_level_2',
        'song_level_3',
        'song_level_4',
        'song_level_5',
        'bell',
        'castanets',
        'cymbals',
        'drum',
        'flute',
        'maracas',
        'trumpet',
        'tambourine'
    ];
    
    private drawing_level_1_flag = new Flag(0x3, 0o7);
    private drawing_level_2_flag = new Flag(0x3, 0o6);
    private drawing_level_3_flag = new Flag(0x3, 0o5);
    private drawing_level_4_flag = new Flag(0x3, 0o4);
    private drawing_level_5_flag = new Flag(0x3, 0o3);
    private shake_dance_flag     = new Flag(0x2, 0o7);
    private spin_dance_flag      = new Flag(0x2, 0o6);
    private step_dance_flag      = new Flag(0x2, 0o5);
    private go_go_dance_flag     = new Flag(0x2, 0o4);
    private exercise_flag        = new Flag(0x2, 0o3);
    private song_level_1_flag    = new Flag(0x1, 0o7);
    private song_level_2_flag    = new Flag(0x1, 0o6);
    private song_level_3_flag    = new Flag(0x1, 0o5);
    private song_level_4_flag    = new Flag(0x1, 0o4);
    private song_level_5_flag    = new Flag(0x1, 0o3);
    private bell_flag            = new Flag(0x0, 0o7);
    private castanets_flag       = new Flag(0x0, 0o6);
    private cymbals_flag         = new Flag(0x0, 0o5);
    private drum_flag            = new Flag(0x0, 0o4);
    private flute_flag           = new Flag(0x0, 0o3);
    private maracas_flag         = new Flag(0x0, 0o2);
    private trumpet_flag         = new Flag(0x0, 0o1);
    private tambourine_flag      = new Flag(0x0, 0o0);
    
    get drawing_level_1() { return this.flag_manager.isFlagSet(this.drawing_level_1_flag); }
    get drawing_level_2() { return this.flag_manager.isFlagSet(this.drawing_level_2_flag); }
    get drawing_level_3() { return this.flag_manager.isFlagSet(this.drawing_level_3_flag); }
    get drawing_level_4() { return this.flag_manager.isFlagSet(this.drawing_level_4_flag); }
    get drawing_level_5() { return this.flag_manager.isFlagSet(this.drawing_level_5_flag); }
    get shake_dance()     { return this.flag_manager.isFlagSet(this.shake_dance_flag);     }
    get spin_dance()      { return this.flag_manager.isFlagSet(this.spin_dance_flag);      }
    get step_dance()      { return this.flag_manager.isFlagSet(this.step_dance_flag);      }
    get go_go_dance()     { return this.flag_manager.isFlagSet(this.go_go_dance_flag);     }
    get exercise()        { return this.flag_manager.isFlagSet(this.exercise_flag);        }
    get song_level_1()    { return this.flag_manager.isFlagSet(this.song_level_1_flag);    }
    get song_level_2()    { return this.flag_manager.isFlagSet(this.song_level_2_flag);    }
    get song_level_3()    { return this.flag_manager.isFlagSet(this.song_level_3_flag);    }
    get song_level_4()    { return this.flag_manager.isFlagSet(this.song_level_4_flag);    }
    get song_level_5()    { return this.flag_manager.isFlagSet(this.song_level_5_flag);    }
    get bell()            { return this.flag_manager.isFlagSet(this.bell_flag);            }
    get castanets()       { return this.flag_manager.isFlagSet(this.castanets_flag);       }
    get cymbals()         { return this.flag_manager.isFlagSet(this.cymbals_flag);         }
    get drum()            { return this.flag_manager.isFlagSet(this.drum_flag);            }
    get flute()           { return this.flag_manager.isFlagSet(this.flute_flag);           }
    get maracas()         { return this.flag_manager.isFlagSet(this.maracas_flag);         }
    get trumpet()         { return this.flag_manager.isFlagSet(this.trumpet_flag);         }
    get tambourine()      { return this.flag_manager.isFlagSet(this.tambourine_flag);      }
    
    set drawing_level_1(flag: boolean) { this.flag_manager.setFlag(this.drawing_level_1_flag, flag); }
    set drawing_level_2(flag: boolean) { this.flag_manager.setFlag(this.drawing_level_2_flag, flag); }
    set drawing_level_3(flag: boolean) { this.flag_manager.setFlag(this.drawing_level_3_flag, flag); }
    set drawing_level_4(flag: boolean) { this.flag_manager.setFlag(this.drawing_level_4_flag, flag); }
    set drawing_level_5(flag: boolean) { this.flag_manager.setFlag(this.drawing_level_5_flag, flag); }
    set shake_dance(flag: boolean)     { this.flag_manager.setFlag(this.shake_dance_flag,     flag); }
    set spin_dance(flag: boolean)      { this.flag_manager.setFlag(this.spin_dance_flag,      flag); }
    set step_dance(flag: boolean)      { this.flag_manager.setFlag(this.step_dance_flag,      flag); }
    set go_go_dance(flag: boolean)     { this.flag_manager.setFlag(this.go_go_dance_flag,     flag); }
    set exercise(flag: boolean)        { this.flag_manager.setFlag(this.exercise_flag,        flag); }
    set song_level_1(flag: boolean)    { this.flag_manager.setFlag(this.song_level_1_flag,    flag); }
    set song_level_2(flag: boolean)    { this.flag_manager.setFlag(this.song_level_2_flag,    flag); }
    set song_level_3(flag: boolean)    { this.flag_manager.setFlag(this.song_level_3_flag,    flag); }
    set song_level_4(flag: boolean)    { this.flag_manager.setFlag(this.song_level_4_flag,    flag); }
    set song_level_5(flag: boolean)    { this.flag_manager.setFlag(this.song_level_5_flag,    flag); }
    set bell(flag: boolean)            { this.flag_manager.setFlag(this.bell_flag,            flag); }
    set castanets(flag: boolean)       { this.flag_manager.setFlag(this.castanets_flag,       flag); }
    set cymbals(flag: boolean)         { this.flag_manager.setFlag(this.cymbals_flag,         flag); }
    set drum(flag: boolean)            { this.flag_manager.setFlag(this.drum_flag,            flag); }
    set flute(flag: boolean)           { this.flag_manager.setFlag(this.flute_flag,           flag); }
    set maracas(flag: boolean)         { this.flag_manager.setFlag(this.maracas_flag,         flag); }
    set trumpet(flag: boolean)         { this.flag_manager.setFlag(this.trumpet_flag,         flag); }
    set tambourine(flag: boolean)      { this.flag_manager.setFlag(this.tambourine_flag,      flag); }
}

export class ToyFlags extends JSONTemplate implements ChaoAPI.IToyFlags {
    private ModLoader: IModLoaderAPI;
    private emulator: IMemory;
    private instance: number;
    private slot: number;
    private flag_manager: FlagManager;
    private get flags_addr() { return this.instance + (this.slot * 0x800) + 0x4E0; }
    
    constructor(ModLoader: IModLoaderAPI, log: ILogger, slot: number) {
        super();
        this.ModLoader = ModLoader;
        this.emulator = ModLoader.emulator;
        this.instance = current_game.chao_data;
        this.slot = slot;
        this.flag_manager = new FlagManager(this.emulator, this.flags_addr);
    }
    
    jsonFields: string[] = [
        'rattle',
        'car',
        'picture_book',
        'sonic_doll',
        'broomstick',
        'unknown',
        'pogo_stick',
        'crayons',
        'bubble_wand',
        'shovel',
        'watering_can'
    ];
    
    private rattle_flag       = new Flag(0x1, 0o7);
    private car_flag          = new Flag(0x1, 0o6);
    private picture_book_flag = new Flag(0x1, 0o5);
    private sonic_doll_flag   = new Flag(0x1, 0o3);
    private broomstick_flag   = new Flag(0x1, 0o2);
    private unknown_flag      = new Flag(0x1, 0o1);
    private pogo_stick_flag   = new Flag(0x1, 0o0);
    private crayons_flag      = new Flag(0x0, 0o7);
    private bubble_wand_flag  = new Flag(0x0, 0o6);
    private shovel_flag       = new Flag(0x0, 0o5);
    private watering_can_flag = new Flag(0x0, 0o4);
    
    get rattle()       { return this.flag_manager.isFlagSet(this.rattle_flag);       }
    get car()          { return this.flag_manager.isFlagSet(this.car_flag);          }
    get picture_book() { return this.flag_manager.isFlagSet(this.picture_book_flag); }
    get sonic_doll()   { return this.flag_manager.isFlagSet(this.sonic_doll_flag);   }
    get broomstick()   { return this.flag_manager.isFlagSet(this.broomstick_flag);   }
    get unknown()      { return this.flag_manager.isFlagSet(this.unknown_flag);      }
    get pogo_stick()   { return this.flag_manager.isFlagSet(this.pogo_stick_flag);   }
    get crayons()      { return this.flag_manager.isFlagSet(this.crayons_flag);      }
    get bubble_wand()  { return this.flag_manager.isFlagSet(this.bubble_wand_flag);  }
    get shovel()       { return this.flag_manager.isFlagSet(this.shovel_flag);       }
    get watering_can() { return this.flag_manager.isFlagSet(this.watering_can_flag); }
    
    set rattle(flag: boolean)       { this.flag_manager.setFlag(this.rattle_flag,       flag); }
    set car(flag: boolean)          { this.flag_manager.setFlag(this.car_flag,          flag); }
    set picture_book(flag: boolean) { this.flag_manager.setFlag(this.picture_book_flag, flag); }
    set sonic_doll(flag: boolean)   { this.flag_manager.setFlag(this.sonic_doll_flag,   flag); }
    set broomstick(flag: boolean)   { this.flag_manager.setFlag(this.broomstick_flag,   flag); }
    set unknown(flag: boolean)      { this.flag_manager.setFlag(this.unknown_flag,      flag); }
    set pogo_stick(flag: boolean)   { this.flag_manager.setFlag(this.pogo_stick_flag,   flag); }
    set crayons(flag: boolean)      { this.flag_manager.setFlag(this.crayons_flag,      flag); }
    set bubble_wand(flag: boolean)  { this.flag_manager.setFlag(this.bubble_wand_flag,  flag); }
    set shovel(flag: boolean)       { this.flag_manager.setFlag(this.shovel_flag,       flag); }
    set watering_can(flag: boolean) { this.flag_manager.setFlag(this.watering_can_flag, flag); }
}