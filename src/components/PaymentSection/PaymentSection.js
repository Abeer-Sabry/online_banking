import React from 'react'
import styled from 'styled-components'
import card from '../../img/creditcard.svg'
import active from '../../img/active.svg'
import inactive from '../../img/inactive.svg'
import check from '../../img/check.svg'
import checkdisabled from '../../img/check-disabled.svg'
import StyledPaymentCard from './StyledPaymentCard'

const PaymentSection = () => {
    return (
        <PaymentStyles>
            <div className="paymentHeading">
                <h1>An Expectional Service , <span>at the right price</span></h1>
                <p> Ipsum passages, and more recently with desktop publishing software</p>
            </div>
            <div className="content">
                <StyledPaymentCard
                    account={'free'}
                    amount={'$0'}
                    text={'manage your business with a simple and efficient account '}
                    btn={'Get Started'}
                    card={card}
                    active={active}
                    inactive={inactive}
                    check={check}
                    checkdisabled={checkdisabled}
                    text1={'10 free local tranfers'}
                    text2={'free ATM withdrawals in dollar up to $250 per month'}
                    text3={'free payment to other draft accounts'}
                    text4={'Prepaid debit cards'}
                    text5={'Virtual cards'}
                    text6={'Priority 24/7 support'}
                    text7={'Exchange 24 currencies'}
                    text8={'Multi-user access'}
                />
                <StyledPaymentCard
                    account={'Premium'}
                    amount={'$10'}
                    text={'manage your business with a simple and efficient account '}
                    btn={'Get Started'}
                    card={card}
                    active={active}
                    inactive={inactive}
                    check={check}
                    checkdisabled={checkdisabled}
                    text1={'10 free local tranfers'}
                    text2={'free ATM withdrawals in dollar up to $250 per month'}
                    text3={'free payment to other draft accounts'}
                    text4={'Prepaid debit cards'}
                    text5={'Virtual cards'}
                    text6={'Priority 24/7 support'}
                    text7={'Exchange 24 currencies'}
                    text8={'Multi-user access'}
                />
            </div>
        </PaymentStyles>
    )
}
const PaymentStyles = styled.div`
padding-top: 200px;
.paymentHeading{
    text-align: center;
    h1{
        color: var(--main4-color);
    }
    span{
        color: var(--main-color);
    }
    p{
        margin-bottom:70px;
    }
}
.content{
    display:grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap:40px;
}
`
export default PaymentSection
