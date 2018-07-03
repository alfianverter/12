"use strict";

const convertDate = require("./convertDate");

/**
 * convert server
 *
 * @param {Channel}
 * @returns {Server}
 */
module.exports = (server) => {
    return {
        __default: server.name,

        name: server.name,
        id: server.id,
        large: server.large,
        member_count: server.memberCount,
        created_at: convertDate(server.createdTimestamp),
    };
};
