const mongoose = require("mongoose")
const videoSchema = new mongoose.Schema({
    kind: {
        type: String,
        
    },

    id: {
        type: String,
        
    },

    snippet: {
        type: [String],
        // required:true
    },
    snippet:{
        publishedAt: {
            type: Date,
            required: true,
            default: Date.now()
        },
        channelId: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },

        description:{
            type: String,
           
        },
        thumbnails: {
            default: {
                url: {
                    type: String,

                }
            },
            medium: {
                url: {
                    type: String

                }
            },

            high: {
                url: {
                    type: String,

                }
            }


        },
        channelTitle: {
            type: String,
            required: true
        },
        liveBrodcastContent: {
            type: String,
        
        },

        publishTime: {
            type: Date,
            default: Date.now()
        }

    },
    views: {
        type: Number,
        default: 0
    },
    tag: {
        type: [String]
    },
    likes: {
        type: [String],
        default: []
    },
    dislikes: {
        type: [String],
        default: []
    }


}, {timestamps: true})
module.exports = mongoose.model("Video", videoSchema)
