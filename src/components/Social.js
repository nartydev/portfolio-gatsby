import { Link } from "gatsby"
import React from "react"

import { global } from "../styles/"

const Social = () => (
    <global.socialMenu>
        <global.socialLink><a href="#">Linkedin</a></global.socialLink>
        <global.socialLink><a href="#">Twitter</a></global.socialLink>
        <global.socialLink><a href="#">Github</a></global.socialLink>
    </global.socialMenu>
)

export default Social;
