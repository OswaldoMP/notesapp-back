const User = require('../models/user');

const show = (req, res) => {
    User.find((err, data) => {
        if (err) {
            res.status(500).json({
                ok: false,
                err
            });

        }
        return res.status(200).json({
            ok: true,
            data
        });
    });
}

const showById = (req, res) => {
    let id = req.params.id;
    User.findOne({ _id: id })
        .exec((err, data) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            return res.status(200).json({
                ok: true,
                data
            });
        });
}

const create = (req, res) => {
    let { name } = req.body;
    let user = new User({
        name
    });

    user.save((err, data) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        return res.status(200).json({
            ok: true,
            data
        });
    });
}

const update = (req, res) => {
    let id = req.params.id;
    let body = req.body;

    User.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: 'query' }, (err, data) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        return res.status(200).json({
            ok: true,
            data
        });
    });

}

const destroy = (req, res) => {
    let id = req.params.id;

    User.findByIdAndRemove(id, (err, data) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!data) {
            return res.status(400).json({
                ok: false,
                message: 'User wasnt finded'
            });
        }

        return res.status(200).json({
            ok: true,
            message: 'User deleted'
        })
    });
}

module.exports = {
    show,
    showById,
    create,
    update,
    destroy
}