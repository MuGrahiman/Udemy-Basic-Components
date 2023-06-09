import React, { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'

function ModalPage() {
    const [showModal, setModal] = useState(false)
    const handleClick = () => {
        setModal(true)
    }
    const handleClose = () => {
        setModal(false)
    }
    const actionBar = (
    <div>
        <Button primary onClick={handleClose}>I Accept</Button>
    </div>)

    const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here is an important agreement for you to accept</p>
    </Modal>)
    return (
        <div>
            <Button primary onClick={handleClick}>Show Modal</Button>
            {showModal && modal}

        </div>
    )
}

export default ModalPage
