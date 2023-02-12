const UserSchema = new mongoose.Schema({
  roll_no: Number,
  name: String,
  year: Number,
  subjects: [String]
});
const User = mongoose.model('User', UserSchema);
const stud = new User({
  roll_no: 1001,
  name: 'Adam Nowak',
  year: 2033,
  access: {insert:true,update:true,delete:true}
});
stud
  .save()
  .then(
      () => console.log("Dodałem usera"), 
      (err) => console.log(err)
  );