import React from 'react'
import NextLink from 'next/link'

const Navigation = () => {

    return (
        <nav>
            <ul>
                <li>
                    <NextLink href='/'><a>Home</a></NextLink>
                </li>
                <li>
                    <NextLink href='/about'><a>About us</a></NextLink>
                </li>
                <li>
                    <NextLink href='/contact_us'><a>Contact Us</a></NextLink>
                </li>
                <li>
                    <NextLink href='/pravicy_and_policy'><a>Privacy and Policy</a></NextLink>
                </li>
                <li>
                    <NextLink href='/login'><a>Login</a></NextLink>
                </li>
                <li>
                    <NextLink href='/cart'><a>Cart</a></NextLink>
                </li>
                <li>
                    <NextLink href='/product_ditails'><a>Product Details</a></NextLink>
                </li>
                <li>
                    <NextLink href='/product_list'><a>Product List</a></NextLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;