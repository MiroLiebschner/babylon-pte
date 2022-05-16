use scrypto::prelude::*;

blueprint! {
    struct WeatherOracle {
     
        temperature: Decimal,
    }

    impl WeatherOracle {
        // given a price in XRD, creates a ready-to-use gumball machine
        pub fn instantiate_gumball_machine() -> ComponentAddress {
         
            // populate a GumballMachine struct and instantiate a new component
            Self {
              
                temperature: dec!(15)
            }
            .instantiate()
            .globalize()
        }

       

        pub fn get_temperature(&self) -> Decimal {
            self.temperature
        }

        pub fn set_temperature(&mut self, new_temperature: Decimal)  {
            self.temperature = new_temperature;
        }
    }
}
