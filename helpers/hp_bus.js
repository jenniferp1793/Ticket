import Bus from "../models/bus.js";

const helpersBus = {
    existeHolderById: async (id, req) => {
        const existe = await Bus.findById(id)

        if (!existe) {
            throw new Error(`El id no existe ${id}`)
        }
        req.req.BusUpdate = existe
    },
}
export default helpersBus