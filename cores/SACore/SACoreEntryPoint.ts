import { ExternalAPIProvider } from "modloader64_api/ExternalAPIProvider";
import path from 'path';

@ExternalAPIProvider("SACore", require(path.resolve(__dirname, "package.json")).version, path.resolve(__dirname))
class SACoreAPI{
}

module.exports = require("./src/SACore.js");