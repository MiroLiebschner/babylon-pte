use scrypto::prelude::*;

// A contract that returns the temperature in paris
blueprint! {
    struct WeatherInParisOracle {
        temperature_in_paris: Decimal,
    }

    impl WeatherInParisOracle {
        pub fn instantiate_weather_in_paris() -> ComponentAddress {
            Self {
                temperature_in_paris: Decimal::from(1) 
            }
            .instantiate()
            .globalize()
        
    }


    pub fn update_temperature(&mut self, new_temperature: Decimal){
        //ToDo impl badge system so only the owner can update  
        self.temperature_in_paris = new_temperature;
    }
 
   pub fn get_temperature(&self){
       self.temperature_in_paris;
   } 
}}