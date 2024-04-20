const moment = require('moment-timezone');

module.exports = {
   getIndex :  async (req,res) => {
    try {
        const response = await fetch (`https://data.cityofchicago.org/resource/8pix-ypme.json`)
        const data = await response.json()
        // console.log(data[0])
        res.render('search.ejs', {data:data})
    }
    catch (err){
        console.log(err)
    }
      
    },

    getSchedule : async (req,res) => {
        // console.log('trying')
        // console.log(req.query , req.params)
        const zipcode = req.query.zipcode
        try {
            const timeZone = moment.tz.setDefault("America/Chicago");
            const response = await fetch (`https://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${process.env.API_KEY}&mapid=${zipcode}&max=5&outputType=JSON`)
            const data = await response.json()
            console.log('fetched')

            // const data2 = await resp.json()

            // console.log(data.ctatt.eta)
            //LOOP EACH DATA POINT TO EJS -> DIFFERENT EJS ROUTE/CONTROLLER/PAGE
      
            res.render('results.ejs', {data: data, time: timeZone, moment: moment})
        }
        catch (err) {
            console.log(err)
        }
       
    }

}
