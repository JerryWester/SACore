import * as API from '../../../API/imports';
import IMemory from 'modloader64_api/IMemory';
import { Time, TwinkleCircuitTimes, AdventureData } from '../../SADX/SaveContext';
import { ILogger, IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';

export interface IFakeArray<T extends number | API.SADX.ITime | API.SADX.ITwinkleCircuitTimes | API.SADX.IAdventureData> {
    [num: number]: T;
    length: number;
}

export class FakeArray8 implements IFakeArray<number> {
    [num: number]: number;
    private _length: number;
    get length() { return this._length; }

    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: number, length: number) {
        this._length = length;
        for (let i = 0; i < length; i++) {
            Object.defineProperty(this, i, {
                get() { return ModLoader.emulator.rdramRead8(address + i) },
                set(num: number) { ModLoader.emulator.rdramWrite8(address + i, num) }
            });
        }
    }
}

export class FakeArray16 implements IFakeArray<number> {
    [num: number]: number;
    private _length: number;
    get length() { return this._length; }

    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: number, length: number) {
        this._length = length;
        for (let i = 0; i < length; i++) {
            Object.defineProperty(this, i, {
                get() { return ModLoader.emulator.rdramRead16(address + i * 2) },
                set(num: number) { ModLoader.emulator.rdramWrite16(address + i * 2, num) }
            });
        }
    }
}

export class FakeArray32 implements IFakeArray<number> {
    [num: number]: number;
    private _length: number;
    get length() { return this._length; }

    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: number, length: number) {
        this._length = length;
        for (let i = 0; i < length; i++) {
            Object.defineProperty(this, i, {
                get() { return ModLoader.emulator.rdramRead32(address + i * 4) },
                set(num: number) { ModLoader.emulator.rdramWrite32(address + i * 4, num) }
            });
        }
    }
}

export class FakeArrayTime implements IFakeArray<API.SADX.ITime> {
    [num: number]: API.SADX.ITime;
    private _length: number;
    get length() { return this._length; }

    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: number, length: number) {
        this._length = length;
        for (let i = 0; i < length; i++) {
            Object.defineProperty(this, i, {
                get() { return new Time(ModLoader, log, address + i * 3) }
            });
        }
    }
}

export class FakeArrayTwinkleCircuitTimes implements IFakeArray<API.SADX.ITwinkleCircuitTimes> {
    [num: number]: API.SADX.ITwinkleCircuitTimes;
    private _length: number;
    get length() { return this._length; }

    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: number, length: number) {
        this._length = length;
        for (let i = 0; i < length; i++) {
            Object.defineProperty(this, i, {
                get() { return new TwinkleCircuitTimes(ModLoader, log, address + i * 0xF) }
            });
        }
    }
}

export class FakeArrayAdventureData implements IFakeArray<API.SADX.IAdventureData> {
    [num: number]: API.SADX.IAdventureData;
    private _length: number;
    get length() { return this._length; }

    constructor(ModLoader: IModLoaderAPI, log: ILogger, address: number, length: number) {
        this._length = length;
        for (let i = 0; i < length; i++) {
            Object.defineProperty(this, i, {
                get() { return new AdventureData(ModLoader, log, address + i * 0xC) }
            });
        }
    }
}