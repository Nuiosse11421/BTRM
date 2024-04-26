export default (req,res,next)=>{
    if(req.session.userId){
        console.log('session.userId is already set')
    }
}