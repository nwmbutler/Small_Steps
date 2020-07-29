import React from 'react';
import { Container } from 'react-bootstrap';

export default class About extends React.Component {
  render() {
    return <div>
      <Container>
        <h1>About the Project</h1>

          <p>Small Steps is a carbon emissions calculator for journeys - it takes the user’s mode of transport, 
            origin, and destination, and makes a call to the Google Directions Matrix to find the distance travelled. It 
            then uses this data to calculate the emissions for the journey in kg CO2e per passenger-km. It also allows the 
            user to see lower-carbon alternatives, real-world equivalents of their journey’s emissions, and it links to 
            sites that allow the user to offset their carbon.</p>

          <h2>Technical Information</h2>

            <p>Small Steps is built using 75% of the MERN stack - the front-end is built with React.js and the 
              back-end with Node.js and Express. You can <a href='https://github.com/nwmbutler/carbon-front-end'> see our code on Github.</a></p>

          <h2>Carbon Calculations</h2>

            <p>Small Steps uses the <a href='https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2019'>most 
              recent information from the UK government</a> to calculate the carbon emissions of individual modes of transport.</p> 
            
            <p>Small Steps probably is not the most accurate carbon calculator out there, as it’s limited by the 
              open-source (or inexpensive) data available to the average developer. That said, its value is in its simplicity 
              because we believe that global warming will not be solved with overly-complex solutions but by the work of 
              governments combined with the change in awareness and actions of individuals. It’s not the whole solution, but 
              it’s a small step. </p>

            <p>We chose to measure this in kilograms of carbon dioxide equivalent, or CO2e, which covers all the 
              greenhouse gases that contribute to climate change. The final amount provided to the user is the emission for their journey 
              as a single passenger - the government figures provide average emissions per passenger-km for large passenger vehicles. We 
              round this number to two decimal places.</p>
            
            <p>Below is a breakdown of the figures and assumptions we used to make our calculations.</p>

            <h3>Car</h3> 

              <p>We assume a medium size (1.4 litre - 2.0 litre) car with a petrol engine. The amount will be higher for diesel 
                engines and lower for hybrid and electric vehicles. </p>

              <p>We calculate the emission of the journey as follows:</p>

              <strong>Distance (metres) x 0.19228 kg CO2e (per passenger km) / 1000</strong>
              <br/>
              <br/>
            <h3>Bus</h3> 

              <p>We assume that the bus in question is a coach. The amount will be higher for local buses.</p>  

              <p>We calculate the emission of the journey as follows:</p>

              <strong>Distance (metres) x 0.02779 kg CO2e (per passenger km) / 1000</strong>
              <br/>
              <br/>
            <h3>Train</h3> 

              <p>We assume that the train in question is a national train. The amount is slightly lower for international 
                trains and roughly equivalent for light rail, trams, and underground trains.</p> 

              <p>We calculate the emission of the journey as follows:</p> 

              <strong>Distance (metres) x 0.04115 kg CO2e (per passenger km) / 1000</strong>
              <br/>
              <br/>
            <h3>Plane</h3>

              <p>We were unable to obtain accurate data for the distance of flights in the UK, so we used an 
                ‘as-the-crow-flies’ number to provide us with a distance in metres.</p>

              <p>We assume that the plane is a domestic UK flight, an average passenger (the average of economy, 
                business and first classes for UK domestic flights), with radiative forcing included (the non-CO2 effects of 
                aviation such as water vapour and contrails).</p>

              <p>The amount is lower for short-haul (to/from the UK, typically Europe), long-haul (international 
                to/from the UK), and international (international to/from non-UK) for average and economy passengers. The amount is 
                slightly lower for short-haul business class passengers. It is considerably higher for short-haul, long-haul, and 
                international business and first-class passengers.</p>

              <p>We calculate the emission of the journey as follows:</p>

                <strong>Distance (metres) x 0.25493 kg CO2e (per passenger km) / 1000</strong>
                <br/>
                <br/>
            <h3>Real-term Equivalents</h3>

            <p>We decided to provide an equivalent of the journey’s emissions in real-terms because raw numbers aren’t 
            very appealing or understandable; we decided to provide the raw number and the number of kettles you would have to boil 
            to produce the same amount of CO2e.</p>

            <p>We calculated the number of kettle-boils as follows:</p>

            <strong>Emissions (kg CO2e) / 0.015kg CO2 (emission per kettle-boil)</strong>
            <br/>
            <br/>
          <h2>Off-setting</h2>

            <p>The primary aim of Small Steps is to raise awareness of the carbon emissions associated with travelling, but we 
              have also linked to a carbon-offsetting site. The Woodland Trust allows you to donate money to contribute to tree-planting 
              schemes that will help to off-set the impact of your journey.</p>
      </Container>
    </div>
  }
}