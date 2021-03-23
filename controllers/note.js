const Note = require('../models/note');

const show = (req, res) => {
    Note.find()
        .populate('user', 'name')
        .exec((err, data) => {
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
    Note.findOne({ _id: id })
        .populate('user', 'name')
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
    let { user, title, content, date } = req.body;

    let newDate = date.toString().split('T')[0];

    console.log(newDate);

    let note = new Note({
        user,
        title,
        content,
        date: newDate
    });

    note.save((err, data) => {
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

    Note.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: 'query' }, (err, data) => {
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

    Note.findByIdAndRemove(id, (err, data) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!data) {
            return res.status(400).json({
                ok: false,
                message: 'Note wasnt finded'
            });
        }

        return res.status(200).json({
            ok: true,
            message: 'Note deleted'
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