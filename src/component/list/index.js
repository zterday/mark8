import React from 'react'
import _ from 'lodash'

import { Grid, Label } from 'semantic-ui-react'

const nameHeader = [{
    name: '',
    key: 0
},
{
    name: 'CONDO NAME',
    key: 1
}, {
    name: 'RENT PRICE',
    sub: 'Bath',
    key: 2
}, {
    name: 'SELL PRICE',
    sub: 'Bath',
    key: 3
}, {
    name: 'BEDROOM',
    key: 4
}, {
    name: 'BATHROOM',
    key: 5
}, {
    name: 'SIZE',
    sub: 'sqm.',
    key: 6
}, {
    name: 'FLOOE',
    key: 7
}, {
    name: 'STATUS',
    key: 8
}, {
    name: 'PHOTO',
    key: 9
}, {
    name: 'TITLE',
    key: 10
}, {
    name: 'DESCRIPTION',
    key: 11
}, {
    name: 'BENEFIT',
    key: 12
}, {
    name: 'Amentities',
    key: 13
},]

const HeaderList = () => (
    <React.Fragment> {
        _.map(nameHeader, item =>
            <Grid.Column key={item.key}>
                {item.name}
                {item.sub && <span>({item.sub})</span>}
            </Grid.Column>
        )
    }</React.Fragment>)


// accept_agent: true
// agent_post: true
// aircon: true
// bath: 1
// bath_tub: null
// bedroom: 0
// condo_name_en: "Chapter One Eco Ratchada-Huai Khwang"
// description: "ห้องใหม่เอี่ยม ให้เช่าพร้อมเฟอร์นิเจอร์ เครื่องใช้ไฟฟ้า เตียง โซฟา เครื่องปรับอากาศ เครื่องซักผ้า เครื่องทำน้ำร้อน เครื่องกรองน้ำ ไมโครเวฟ มัดจำห้อง2เดือน"
// electric_stove: true
// floor: 12
// furniture: true
// gas_stove: null
// id: 1
// photo1: "https://storage.googleapis.com/m8-prod.appspot.com/images_condo/08_06_2020_15_00_27_tn_Aof.jpg"
// refrigerator: true
// rent_price: "15,000"
// sale_price: 0
// size__sq_m_: 28
// title: "ให้เช่า 1 ห้องนอน ตกแต่งพร้อมอยู่ ยังไม่เคยมีคนเช่า ยินดีรับโคเอเจ้นท์ให้เช่า 1 ห้องนอน ตกแต่งพร้อมอยู่ ยังไม่เคยมีคนเช่า ยินดีรับโคเให้เช่า 1 ห้องนอน ตกแต่งพร้อมอยู่ ยังไม่เคยมีคนเช่า ยินดีรับโคเให้เช่า 1 ห้องนอน ตกแต่งพร้อมอยู่ ยังไม่เคยมีคนเช่า ยินดีรับโคเให้เช่า 1 ห้องนอน ตกแต่งพร้อมอยู่ ยังไม่เคยมีคนเช่า ยินดีรับโคเ"
// washing_machine: null
// water_heater: null

const styleTextWrap = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
}

const Item = ({ data }) => (
    <React.Fragment>
        {
            _.map(data, item => {
                const listAmenities = _.mapKeys(item, (value, key) => { if(value === true ){return key} else return })
                const Amenities = _.keys(_.pickBy(listAmenities, (value, key) => (key !== 'undefined' && key !== 'accept_agent' && key !== 'agent_post')))
                console.log({ Amenities})
                return (
                    <Grid.Row>
                        <Grid.Column>
                            {item.id}
                        </Grid.Column>
                        <Grid.Column style={styleTextWrap}>
                            {item.condo_name_en}
                        </Grid.Column>
                        <Grid.Column>
                            {item.rent_price}
                        </Grid.Column>
                        <Grid.Column>
                            {item.sale_price}
                        </Grid.Column>
                        <Grid.Column>
                            {item.bedroom}
                        </Grid.Column>
                        <Grid.Column>
                            {item.bath}
                        </Grid.Column>
                        <Grid.Column>
                            {item.size__sq_m_}
                        </Grid.Column>
                        <Grid.Column>
                            {item.floor}
                        </Grid.Column>
                        <Grid.Column>
                            {item.agent_post && <Label circular color='yellow'>Agent post</Label>}
                            {item.accept_agent && <Label circular color='olive'>รับ Co-Agent</Label>}
                        </Grid.Column>
                        <Grid.Column style={styleTextWrap}>
                            {item.photo1}
                        </Grid.Column>
                        <Grid.Column style={styleTextWrap}>
                            {item.title}
                        </Grid.Column>
                        <Grid.Column style={styleTextWrap}>
                            {item.description}
                        </Grid.Column>
                        <Grid.Column>
                            {/* {item.condo_name_en} */}
                        </Grid.Column>
                        <Grid.Column>
                            {Amenities.length}
                        </Grid.Column>
                    </Grid.Row>
            )})
        }
    </React.Fragment>
)

const List = ({ data }) => {
    console.log({ data })
    return (
        <Grid>
            <Grid.Row>
                <HeaderList />
            </Grid.Row>
            <Item data={data} />
        </Grid>
    )
}

export default List