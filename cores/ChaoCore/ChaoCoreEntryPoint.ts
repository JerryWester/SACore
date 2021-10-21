import { ExternalAPIProvider } from "modloader64_api/ExternalAPIProvider";
import path from 'path';

@ExternalAPIProvider("ChaoCore", require(path.resolve(__dirname, "package.json")).version, path.resolve(__dirname))
class ChaoCoreAPI{
}

module.exports = require("./src/ChaoCore.js");