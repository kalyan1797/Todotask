const mongoose = requrie("mongoose");

const todoSchema = mongoose.schema({
    title: {
        type: String,
        required: true
    },
    description : {
        type: String
        required: true,
        default: "N/A"
    },
    onDate: {
        type: Date,
        required: "true",
        default: Date.now
    },
    cardColors: {
        type: string,
        required: true,
        default: "#cddc39"
    },
    isCompleted: {
        type: Boolean,
        required: true,
        default: false
    },
    timestamps: {
        createdOn: {
            type: date,
            required: true,
            default: date.now
        },
        completedOn: {
            type: Date,
            default: null
        }
    }
});

module.exports = mongoose.model("Todo", todoSchema);
