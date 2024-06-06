import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

export const getPanggilan =async (req,res)=>{
    try {
        const response = await prisma.panggilan.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg:error.massage});
    }
}

export const getPanggilanById =async (req,res)=>{
    try {
        const response = await prisma.panggilan.findUnique({
            where:{
                id:Number(req.params.id)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg:error.massage});
    }
}
export const createPanggilan =async (req,res)=>{
    const {name, status} = req.body;
    try {
        const panggilan = await prisma.panggilan.create({
            data:{
                name:name,
                status:status
            }
        });
        res.status(201).json(panggilan); 
    } catch (error) {
        res.status(400).json({msg:error.massege});
    }
}
export const updatePanggilan =async (req,res)=>{
    const {name, status} = req.body;
    try {
        const panggilans = await prisma.panggilan.update({
            where:{
                id:Number(req.params.id)
            },
            data:{
                name:name,
                status:status
            }
        });
        res.status(200).json(panggilans); 
    } catch (error) {
        res.status(400).json({msg:error.massege});
    }
}
export const deletePanggilan =async (req,res)=>{
    const {name, status} = req.body;
    try {
        const panggilan = await prisma.panggilan.delete({
            where:{
                id:Number(req.params.id)
            }
        });
        res.status(200).json(panggilan); 
    } catch (error) {
        res.status(400).json({msg:error.massege});
    }
}