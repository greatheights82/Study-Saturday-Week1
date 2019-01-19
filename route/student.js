const router = require('express').Router();

let students = [
  { id: 1, name: 'Dan' },
  { id: 2, name: 'Karen' },
  { id: 3, name: 'Hugo' },
  { id: 4, name: 'Charlie' },
  { id: 5, name: 'Claire' },
];

router.get('/', (req, res, next) => {
  try {
    res.json({ students });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', (req, res, next) => {
  try {
    let student = students.filter(individual => {
      individual.id === req.params.id;
    });
    res.json(student);
  } catch (error) {
    next(error);
  }
});

router.post('/', (req, res, next) => {
  try {
    let newId = students.length + 1;
    let student = {
      id: newId,
      name: req.body.name,
    };
    students.push[student];
    res.json({ students });
  } catch (error) {
    next(error);
  }
});

// router.put('/:id', (req, res, next) => {});

// router.delete('/', (req, res, next) => {});

module.exports = router;
