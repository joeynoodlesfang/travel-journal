import Header from "/components/Header.jsx"
import Entry from "/components/Entry.jsx"
import MountFujiJPG from "/assets/img/Japan/MountFuji.jpg"
import OperaJPG from "/assets/img/Australia/Sydney Opera House.jpg"
import GeirangerfjordJPG from "/assets/img/Norway/1920px-Geirangerfjord_.jpg"

export default function App () {
    return (
        <>
            <Header />
            <Entry 
                imgSrc={MountFujiJPG}
                imgAlt="Mount Fuji"
                countryName="Japan"
                locationMapLink="https://www.google.com/maps/place/Mount+Fuji/
                            // @35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1
                            // s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.360
                            // 6255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
                travelDate="12 Jan, 2023 - 24 Jan, 2023"
                infoContent="Mount Fuji is the tallest mountain in Japan, 
                            standing at 3,776 meters (12,380 feet). Mount Fuji 
                            is the single most popular tourist site in Japan, 
                            for both Japanese and foreign tourists."
            />
            <Entry 
                imgSrc={OperaJPG}
                imgAlt="Sydney Opera House"
                countryName="Australia"
                locationMapLink="https://www.google.com/maps/place/Sydney+Opera
                            // +House/@-33.8567844,151.2127164,17z/data=!3m1!4b1!4m6!
                            // 3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-
                            // 33.8567844!4d151.2152967!16zL20vMDZfbm0?entry=ttu&g_e
                            // p=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                travelDate="27 May, 2023 - 8 Jun, 2023"
                infoContent="The Sydney Opera House is a multi-venue performing 
                            arts centre in Sydney. Located on the banks of the 
                            Sydney Harbour, it is often regarded as one of the 
                            20th century's most famous and distinctive buildings."
            />
            <Entry 
                imgSrc={GeirangerfjordJPG}
                imgAlt="Geirangerfjord"
                countryName="Norway"
                locationMapLink="https://www.google.com/maps/place/Geirangerfjord/
                            // @62.1048241,6.9920669,12z/data=!3m1!4b1!4m6!3m5!
                            // 1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.
                            // 101506!4d7.0940817!16zL20vMDZ4eXFi?entry=ttu&g_ep=
                            // EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                travelDate="01 Oct, 2024 - 18 Nov, 2024"
                infoContent="The Geiranger Fjord is a fjord in the Sunnmøre 
                            region of Møre og Romsdal county, Norway. It is 
                            located entirely in the Stranda Municipality."
            />
            {/* <Entry 
                imgSrc={}
                imgAlt=""
                countryName=""
                locationMapLink=""
                travelDate=""
                infoContent=""
            /> */}
        </>
    )
}