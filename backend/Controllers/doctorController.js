import Doctor from "../models/DoctorSchema.js";

// Function for Update Doctor
export const updateDoctor = async(req, res) => {
    const id = req.params.id;

    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(id, {$set: req.body}, {new:true});
        res.status(200).json({
            success:true, 
            message: 'Successfully updated', 
            data: updatedDoctor,
        });

    } catch(err) {
        res.status(500).json({success:false, message: 'Failed to update' })

    }
};

// Function for Delete Doctor
export const deleteDoctor = async(req, res)=> {
    const id = req.params.id

    try {
        await Doctor.findByIdAndDelete(id);
        res.status(200).json({
            success:true, 
            message: 'Deleted successfully',})

    } catch(err) {
        res.status(500).json({success:false, message: 'Failed to delete' })

    }
};

// Function for get Single Doctor
export const getSingleDoctor = async(req, res)=> {
    const id = req.params.id;

    try {
        const doctor = await Doctor.findById(id)
            .populate("reviews")
            .select("-password");

        res.status(200).json({
            success:true, 
            message: 'Doctor found', 
            data: doctor,
        });

    } catch(err) {
        res.status(404).json({success: false, message: 'No Doctor found' });
    }
};


// Function for Get All Doctors
export const getAllDoctor = async(req, res)=> {
    try {
        const { query } = req.query
        let doctors;

        if(query) {
            doctors = await Doctor.find({
                isApproved: 'approved',
                $or: [
                    {name: {$regex: query, $options: "i" } },
                    {specialization: {$regex: query, $options: "i" } },
                ],
            }).select('-password');
        } else {
            doctors = await Doctor.find({isApproved: 'approved'}).select("-password");  
        }

        res.status(200).json({
            success:true, 
            message: 'Doctors found', 
            data: doctors,
        });

    } catch(err) {
        res.status(404).json({success:false, message: 'Not found'});
    }
};


