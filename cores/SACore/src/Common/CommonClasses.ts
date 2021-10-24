import { JSONTemplate } from 'modloader64_api/JSONTemplate';
import { ILogger, IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import * as API from "../../API/imports";
import IMemory from 'modloader64_api/IMemory';

export class Time extends JSONTemplate implements API.Common.ITime {
    private ModLoader: IModLoaderAPI;
    private emulator: IMemory;
    private instance: number;
    private get minutes_addr() { return this.instance + 0x0; }
    private get seconds_addr() { return this.instance + 0x1; }
    private get frames_addr()  { return this.instance + 0x2; }

    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: number) {
        super();
        this.ModLoader = ModLoader;
        this.emulator = ModLoader.emulator;
        this.instance = address;
    }

    jsonFields: string[] = [
        'minutes',
        'seconds',
        'frames'
    ];

    get minutes() { return this.emulator.rdramRead8(this.minutes_addr); }
    get seconds() { return this.emulator.rdramRead8(this.seconds_addr); }
    get frames()  { return this.emulator.rdramRead8(this.frames_addr);  }

    set minutes(num: number) { this.emulator.rdramWrite8(this.minutes_addr, num); }
    set seconds(num: number) { this.emulator.rdramWrite8(this.seconds_addr, num); }
    set frames(num: number)  { this.emulator.rdramWrite8(this.frames_addr,  num); }
}