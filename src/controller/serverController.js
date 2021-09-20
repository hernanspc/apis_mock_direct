import internetxdiaok from '../../mock/internetxdiaok.json'
import internetxdiaokpost from '../../mock/internetxdiaokpost.json'
import invoicing from '../../mock/invoicing.json'
import invoicingid from '../../mock/invoicingid.json'
import invoicingidnofile from '../../mock/invoicingidnofile.json'
import guardasaved from '../../mock/guarda_gigassaved.json'
import guardanosaved from '../../mock/guarda_gigasok.json'
import login_rem from '../../mock/login_rem.json'
import login_post from '../../mock/login_post.json'
import lastmovements from '../../mock/lastmovements.json'

const serverController = {
    internetdia : ( _require, response ) => {
        response.json(internetxdiaok)
    },

    internetdiapost : ( _require, response ) => {
        response.json(internetxdiaokpost)
    },

    invoicing : (_require, response) => {
        response.json(invoicing)
    },

    invoicingid : (_require, response) => {
        response.json(invoicingid)
    },

    invoicingidnofile : (_require, response) => {
        response.json(invoicingidnofile)
    },

    guarda_saved : (_require, response) => {
        response.json(guardasaved)
    },

    guarda_nosaved : (_require, response) => {
        response.json(guardanosaved)
    },

    guarda_error : (_require, response) => {
        response.status(500).send({
            ok : false,
            message : 'Error genérico'
        })
    },

    login_rem : (_require, response) => {
        response.json(login_rem)
    },

    login_post : ( _require, response ) => {
        response.json(login_post)
    },

    last_movements : (_require, response) => {
        response.json(lastmovements)
    },
}

export { serverController }