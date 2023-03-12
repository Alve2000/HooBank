
import { card } from '../assets'
import styles, { layout } from '../styles'
import Button from './Button'

const CardDeal = () => {

  return (

    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden' /> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Stop paying too much for your credit card, save money and enjoy better benefits by using our easy-to-use platform to compare and find the best card deal for you.
        </p>

        <Button styles='mt-10'/>
      </div>

      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>

    </section>
  )
}

export default CardDeal
