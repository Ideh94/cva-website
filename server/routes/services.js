const express = require('express');
const router = express.Router();
const Service = require('../models/service');

// GET all services
router.get('/', async (req, res) => {
  const services = await Service.find();
  res.json(services);
});

// POST a new service
router.post('/', async (req, res) => {
  const newService = new Service(req.body);
  const saved = await newService.save();
  res.json(saved);
});

// PUT update a service
router.put('/:id', async (req, res) => {
  const updated = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE a service
router.delete('/:id', async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.json({ message: 'Service deleted' });
});

module.exports = router;
