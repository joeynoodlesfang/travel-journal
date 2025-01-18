import Header from "/components/Header.jsx"
import Entry from "/components/Entry.jsx"
import SurreyXmasTreeLight from "/assets/img/Vancouver/241123 Surrey Christmas Tree Lighting.jpg"
import UWJPG241013 from "/assets/img/Seattle/University of Washington.jpg"
import Thrangu241117 from "/assets/img/Vancouver/241117 Richmond Thrangu Monastery.jpg"

export default function App () {
    console.log("start App")
    return (
        <>
            <Header />
            <Entry 
                img={{
                    src: SurreyXmasTreeLight,
                    alt: "Surrey Christmas Tree Lighting"
                }}
                imgSrc={SurreyXmasTreeLight}
                imgAlt="Surrey Christmas Tree Lighting"
                areaName="Surrey, BC"
                locationMapLink="https://www.google.com/maps/place/Surrey+Central/@49.1894304,-122.8498537,16z/data=!3m1!4b1!4m6!3m5!1s0x5485d82b29464427:0x283cff04830abc17!8m2!3d49.1894304!4d-122.8483981!16s%2Fm%2F04zg7rc?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                travelDate="23 Nov, 2024 - 24 Nov, 2024"
                travelMonth="Nov 2024"
                travelDuration={2}
                infoContent="Come and see the christmas tree lighting! Lots of people, rides, concerts, and treats to eat! And of course, the beautiful christmas tree!"
            />
            <Entry 
                img={{
                    src: Thrangu241117,
                    alt: "Richmond Thrangu Monastery"
                }}
                imgSrc={Thrangu241117}
                imgAlt="Richmond Thrangu Monastery"
                areaName="Richmond, BC"
                locationMapLink="https://www.google.com/maps/place/Thrangu+Monastery/@49.1541312,-123.0932331,17z/data=!3m1!4b1!4m6!3m5!1s0x5485d76de5c1a127:0x3bdcddadb9e2b811!8m2!3d49.1541312!4d-123.0906582!16s%2Fm%2F0cmbbxp?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                travelDate="17 Nov, 2024"
                travelMonth="Nov 2024"
                travelDuration={1}
                infoContent="Cool place with a beautiful buddha."
            />
            <Entry 
                img={{
                    src: UWJPG241013,
                    alt: "University of Washington"
                }}
                imgSrc={UWJPG241013}
                imgAlt="University of Washington"
                areaName="Seattle, WA"
                locationMapLink="https://www.google.com/maps/place/University+of+Washington,+Seattle,+WA,+USA/@47.6543747,-122.3134106,15z/data=!3m1!4b1!4m6!3m5!1s0x54901492f492ee53:0xc49de620ee4a0b02!8m2!3d47.6516448!4d-122.3081762!16s%2Fg%2F11vr9rvds7?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                travelDate="13 Oct, 2024 - 14 Oct, 2024"
                travelMonth="Oct 2024"
                travelDuration={2}
                infoContent="A beautiful place of marvel that reminds travellers of the Renaissance, with stunning buildings shaped like castles, and libraries shaped like churches. GO HUSKIES!"
            />
            {/* <Entry 
                imgSrc={}
                imgAlt=""
                areaName=""
                locationMapLink=""
                travelDate=""
                infoContent=""
            /> */}
        </>
    )
}