// import { current_game } from '../../SACore';
import { JSONTemplate } from 'modloader64_api/JSONTemplate';
import { ChaoAPI } from '../../../API/imports';
import { ILogger, IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import IMemory from 'modloader64_api/IMemory';
import { ChaoData } from './ChaoData';
import { current_game } from '../../SACore';

export class Animals extends JSONTemplate implements ChaoAPI.IAnimal {
    private emulator: IMemory;
    private instance: [number];
    private get type_addr()   { return this.instance[0] + 0x0; }
    private get garden_addr() { return this.instance[0] + 0x2; }

    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: [number]) {
        super();
        this.emulator = ModLoader.emulator;
        this.instance = address
    }

    jsonFields: string[] = [
        'type',
        'garden'
    ];

    get type()   { return this.emulator.rdramRead16(this.type_addr);   }
    get garden() { return this.emulator.rdramRead16(this.garden_addr); }

    set type(num: number)   { this.emulator.rdramWrite16(this.type_addr,   num); }
    set garden(num: number) { this.emulator.rdramWrite16(this.garden_addr, num); }
}

export class Fruit extends JSONTemplate implements ChaoAPI.IFruit {
    private emulator: IMemory;
    private instance: [number];
    private get type_addr()   { return this.instance[0] + 0x0; }
    private get garden_addr() { return this.instance[0] + 0x2; }
    private get size_addr()   { return this.instance[0] + 0x4; }
    private get age_addr()    { return this.instance[0] + 0x6; }

    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: [number]) {
        super();
        this.emulator = ModLoader.emulator;
        this.instance = address
    }

    jsonFields: string[] = [
        'type',
        'garden',
        'size',
        'age'
    ];

    get type()   { return this.emulator.rdramRead16(this.type_addr);   }
    get garden() { return this.emulator.rdramRead16(this.garden_addr); }
    get size()   { return this.emulator.rdramRead16(this.size_addr);   }
    get age()    { return this.emulator.rdramRead8(this.age_addr);     }

    set type(num: number)   { this.emulator.rdramWrite16(this.type_addr,   num); }
    set garden(num: number) { this.emulator.rdramWrite16(this.garden_addr, num); }
    set size(num: number)   { this.emulator.rdramWrite16(this.size_addr,   num); }
    set age(num: number)    { this.emulator.rdramWrite16(this.age_addr,    num); }
}

export class Seed extends JSONTemplate implements ChaoAPI.ISeed {
    private emulator: IMemory;
    private instance: [number];
    private get type_addr()   { return this.instance[0] + 0x0; }
    private get garden_addr() { return this.instance[0] + 0x2; }

    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: [number]) {
        super();
        this.emulator = ModLoader.emulator;
        this.instance = address
    }

    jsonFields: string[] = [
        'type',
        'garden'
    ];

    get type()   { return this.emulator.rdramRead16(this.type_addr);   }
    get garden() { return this.emulator.rdramRead16(this.garden_addr); }

    set type(num: number)   { this.emulator.rdramWrite16(this.type_addr,   num); }
    set garden(num: number) { this.emulator.rdramWrite16(this.garden_addr, num); }
}

export class Hat extends JSONTemplate implements ChaoAPI.IHat {
    private emulator: IMemory;
    private instance: [number];
    private get type_addr()   { return this.instance[0] + 0x0; }
    private get garden_addr() { return this.instance[0] + 0x2; }

    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: [number]) {
        super();
        this.emulator = ModLoader.emulator;
        this.instance = address;
    }

    jsonFields: string[] = [
        'type',
        'garden'
    ];

    get type()   { return this.emulator.rdramRead16(this.type_addr);   }
    get garden() { return this.emulator.rdramRead16(this.garden_addr); }

    set type(num: number)   { this.emulator.rdramWrite16(this.type_addr,   num); }
    set garden(num: number) { this.emulator.rdramWrite16(this.garden_addr, num); }
}

export class ChaoGarden extends JSONTemplate implements ChaoAPI.IChaoGarden {
    // private ModLoader: IModLoaderAPI;
    // private emulator: IMemory;
    private _instance: [number];
    get instance() { return this._instance[0]; }
    set instance(num: number) { this.instance[0] = num; }


    chaos: ChaoAPI.IChaoData[];
    animals: ChaoAPI.IAnimal[];
    fruits: ChaoAPI.IFruit[];
    hats: ChaoAPI.IHat[];
    seeds: ChaoAPI.ISeed[];
    black_market_items: ChaoAPI.IBlackMarketItem[];

    constructor(ModLoader: IModLoaderAPI, log: ILogger, address?: [number]) {
        super();
        // this.ModLoader = ModLoader;
        // this.emulator = ModLoader.emulator;
        this._instance = address || [0];
        this.chaos = [];
        this.animals = [];
        this.fruits = [];
        this.hats = [];
        this.seeds = [];
        this.black_market_items = [];
        
        for (let i = 0; i < 24; i++) {
            this.chaos[i] = new ChaoData(ModLoader, log, this._instance);
        }
        Object.seal(this.chaos);
    }

    jsonFields: string[] = [
        'chaos',
        'animals',
        'fruits',
        'hats',
        'seeds',
        'black_market_items'
    ];
}