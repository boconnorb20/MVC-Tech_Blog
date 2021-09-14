const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        comment_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        content:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: 'User',
        //         key: 'user_id'
        //     }
        // },
        // post_id: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     validate: {
        //         len: [1]
        //     }
        // }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: 'Comment'
    }
);

module.exports = Comment;