import express from 'express';
const router = express.Router();

router.get('/', (req : any,res: any) => {
    res.send('fetching users');
})

router.post('/', (req : any,res: any) => {
    res.send('Creating user');
})

export default router;