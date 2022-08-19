module.exports= (sequelize, DataTypes)=>{
    const User= sequelize.define("users",{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        first_name:{
            type: DataTypes.STRING,
            allowNull: false 
        },
        last_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        address:{
            type: DataTypes.STRING
        },
        gender: {
            type: DataTypes.INTEGER
        },
        email:{
            type: DataTypes.STRING
        },
        mobile:{
            type: DataTypes.STRING,
        },
        job: {
            type: DataTypes.STRING
        },
        salary:{
            type: DataTypes.DECIMAL
        },
        profileImage:{
            type: DataTypes.BLOB("long")
        }
    })

    return User
}