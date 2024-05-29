import express from 'express';
import Event from '../models/Event.js';

const router = express.Router();


// creating event
router.post('/', async (req, res) => {
    try {
        const event = new Event(req.body);
        await event.save();
        res.status(201).send(event);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/:userId', async (req, res) => {
    try {
        const events = await Event.find({ userId: req.params.userId });
        res.status(200).send(events);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send(event);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Event.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: 'Event deleted' });
    } catch (error) {
        res.status(400).send(error);
    }
});

export default router;
