import { dynamicImport } from "tsimportlib";
import { Constants } from "@configurations";

const getSh = async () => {
    return (await dynamicImport(
        "node-shikimori",
        module,
    )) as typeof import("node-shikimori");
};

const shClient = async () => {
    const sh = await getSh();
    return sh.client({
        clientName: Constants.SH_CLIENT_NAME,
        maxCallsPerSecond: Constants.SH_MAX_CALLS_PER_SECOND,
        maxCallsPerMinute: Constants.SH_MAX_CALLS_PER_MINUTE,
    });
};

export { shClient };
