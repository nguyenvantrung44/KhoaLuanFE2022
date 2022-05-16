import React from "react";
import { formatDateTime } from "../../../../../utils/format/formatValues";

export default function CanhBaoItem(props) {
    const {item} = props;
    return (
      <div className="list-item" data-id={7}>
        <div>
          <a href="#" data-abc="true">
            <span className="w-48 avatar gd-primary">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABXFBMVEX////7uQEHABAAABD8uAD6+Oj6uQf5wAYvIREAABP8uwAAABEAABQAAA4AABbTnRgAABn//f//vwAAAB35///7tAAHABL+/vv/wQD/ugAAAB4IARX3tQD2ugD8swD/xAD+/PX37cMAAAj69uD4//n1vR3qsQ4IBgn62ZP556/zy1D489f5xDz26bL4/e79ux2FbBErKBY7MBqbfA372IjbrQ4rHRPmvRn6yGwYFxxDNhn5y2K1jxvvvQoAACP5vTT335p3YhFSQBBvWhf3yUsiHBj8wU785buPeROqiBHTphzHlBViTxaVcBU9NxhOPxq5lxi9ix1DOBD7xl5xWBsZDRX61Ho7KQvdqBTEnhQEEhd+bhlhTw6ujhj/ty2JZxkxNRhbQx/90IYvGRIkFBR2VhhoXxH61ZYgFCRjTR2XgxMjIBJFPBwUFRBoWRszIiRFMCCjeRtLRRVvVChKCGlDAAAW1klEQVR4nO1d/VvTyNpukunETDIhTfNJMm0JtMrCKlLKHqGsInq0lS7oWV3Yj+O7X++ux9Wz+v7/1/XOBEimpUCLhbZeuX9QxKSdO8/M8z2TXC5DhgwZMmTIkCFDhgwZMmTIkCFDhgwZMmTIkCFDhmlDwXVzuUp+KV/J5dxxD+ZKsJBzF7+AENjki0X3s6RYWFouCRRQgOHy0rhHM3q4uS+hjSAANiWJQLj4uc1UKzdXkiEjh4QY9lxh3GMaLQq37xBAiZnlcjnmiO7kxz2mUcLNWb/YEKFqdeWuvlqHQIDEXluofDYTlRKZL20BhBpFQ8WGvv6VTwCx85+RRrXcf5AQIe+e5mBH1NWNMkIIbFrjHtfI4LpzVINCWMfiEXDTpysxnBv3wEYGy12mWgZtfX3CULonCwIg98c9sNHhQSggaG7rxwTFQH9qUtMBqFH8HJaim8tDggS7QZfgMW5qRk2ASEC3C58Dw4q1iQAB8kNDTBBEO4haD7jmfg52350PIYCoqQROylBU2gISSGn+c5im1iPqxJA7jyWRh75qUtdt65/WZyDEJ4SaCvOphsVuii1KHMAn4x7ep6LiVqoAElBTZqNuhvhllYUa9ysL4x7jp8G1HtglgrydWbEXeAUROlEfTPk0LeQJtQpCWxNFp4ehqjeoTST2/LjH+GmwNlnEa26op0QoOtrDMkQheDXd7umSTWei2TTwaYY40J4Bm4b7c7lpXorLAEJy53stmaJOFJz8qOB1GSIIl62ptYmVhcWQxhTmihokMsSznDhxC1GXPFycWhkWqKWgq7CmSYmaCbSbGqdscJUl36rTKUO3ULBuQSggbxefiM0R8b2GpKYCVbZNIiBwazrnqWvNE+qPopk0psCB3ix3NHyyFFVRO0BQ8NH8NDpvhYXcJrX1yFxVklkZqd8QofrOSWSKjT0aY4DSZm4KGVqFuRJdY6jFedyScUiDwia3EkW871M5h3PTOE2t+9RlQdUipzv19zSggOWfOYrK+hbVRmB53KO9BKwnJapEqKXgBKbXmG5FB9zvAq1DWZPS4rjHOywWWJLbJnZDSyapg7UVj4nV9rbTcN/Rig3A/NPKlMXCrvULIMAv7xYTFybAhgwQW5qopqW/jbQdj83TtSlzTwvzNqSz9JnqJKZCUZ+zBJsAKMe6ckKROnF6m/EOpyyhYX0BmL+2zilS44UnHIN499Q0mtL3WLQv/MuaKopPbCous86rGePAThja+1HKMMBNlskpzVmVabGKrsuS3ARsccsN428TEVLpeg/TcEM0XhIUCvD+FPlu1h8hIsTbUcTEGOraVwJIKaKGxqVP8VOmTuGDqaHo5uNab0OPEj0TRE8RJClDwdzmGc5+xVTQ9BRNrVc0LBTKLxIPm3J4S80/R1AA1QAHaTD8o4xIibyaFgd8iRkFf19PhSSq+90EY4c1SoMOre0LBNpLUzJPHzFFKt/jRfjQI6CLIYLyahooOsZ3so0AeTQNKZtKYc4WADE7qYQig4aBQi/8Q4VLMOIPNFAUSl9OgWfj5qqAhu0NXUrUjKO/Nk8RpMpmlw87vidMnd6Zgllq3WLT0dvRT/hhR3OqoA9DWNOVKJGh8QMCCMBb4x7/BbAKC3kUotBvp4G9E+HW6TnKqtzeD4l7ymYyjTHoUsxPtrKxKrlXAEFf3khzwDdnV2Wmek4BlWSDW4qzP5oI2hPfoWHN2VRjoKbOLTHtGWKK1EaCbyIieyY1DKxzwSZ+MxG1g0X9GZ2n1GJMtjpdYF0XMHzHEZR2jxxSYss/vV99+XL1fbOKjt2b8t9c8KGvxsHVo8kW4pMSXXLmCmfsJe3giI3XMqKiKkm6rqpPiX9kFNscQ6zWWRrHnuCEhuve/rcMBdgopnpGVF6XadQEENmTlLhogbGj4vWGz4wDKyymHFWtCgESqhV3YsVordkEQu+NmkZNulONpUX+R0kjQkeMigcw9t1qqa6hzLc9GQn2GlVYk4lK3HXhPVPFhCE2WiakXMpvumqkjoP/rLIABHkdNSWuUouBBBTOT6gMXXeTVZLK65yaUV6Y1MGBflOPemrA2nsP0stl+BinaX9lj/X02ZtUiBNpFedCxBSKynFRZki83DZ0zg9P5EWFG5rNdE6LjvIMsTT/k8k0++6yACGocgMW1Z1ybAEOFLGnzo0DtcN8bbps91QuirrnUYqlR5Vxk+kDd2GR2nRobqdtJY5ixHISzHp3u1AMaSNmL/gNhXsmOOZtP5hAs+9WQqo5/IYWcb5mxwR0liLzYZ9OBUmvHbmr5jZXx5DULXaHUBk3n164rrUGESLlnzk1o/5GACtjI2+9T6eCqBy7AqhmOJzN2KHuKSC/WBNXcJsPWW7+sMhR0PeP9h4gc6PPLBXV2hFDItT11L6IartESnI4YQkNt5D7Ik5dPOaMAt7zYLzSCPUB+hDE4dEshVBe1xM/L5p9Uaa/o+5pZdyseLi5uVIICdUoXOeMceAfO9jmdh+G+PFJ1Aj9w2J08mtHlJomAdCerC5wd4FF8aCqcbORumAnsa7Z6dcxtOolkb+8yykb/BLGtdWJmqW5BzZbbjucxx0Vq0k0b7b6MfzoncTFyD7gLnDwShxjPBg3qQSu5eap30JA20jTa0GxntYp0H4/ht8mDKmr962euK3YkBr2HYRAfmFCxOgWrFc0prCpc5KIITJ+lZPxQ7/dzx6umOkVYEtP5qkqFn80PYiEiUmBu4W5EiHQbBpOWohR90GSA4agoZ1mqNZBWsiAKHVnHewYh4C5p0sTEmO41FLQMZLHfOriI1dLQ6CmnDaI+Dni81PlVU7O+AbTQvDRuKmd4Ch18ZRLXeDZAy5DSgC5eZqhNCNA/ikccpc40odY2UyGxXDd+2zra81IFGngqK9lnmGI3p5mqB7wDAEpv1GdE88mMLQqoOFjdRJ0TcVaozIC5Td8yf7mFj8DUeiddtskqdGVCEeoEaVhCY5+YJ8wGT1988RG0GzrDpeNaCFOi9Alau6eZviyKnQzNDtcfhhrjTiRM/4u8IL7ihIk5gZO9Yz+twwhJ0OIaIAU9TDE60joyYRv/aacaGMsqg89QIW8SYU4XpuxsMS4+D9xNWtRm+kuNSGAOqcYqhueL/Rc1sQ30xhDf4ZouA+XcpWxEmSd3KxV5Hteke6aYdfQoYDqaq9Xoz30/O6CDYDyRvFm+gjWZbbA/7kwVhG61mJIWCc314GoGLWeei9dY89x0E0xkH7vrSkCgtqYa4OT6h6AQunLse7gq1SIgIhPXZZ0drH+vB6GEM1IPQxFtdOn5Gb+Lx9j6DWW0IBjFaJ1y6ZhfHlXTVNpmiYjRHoZ1hSxB2q/oiLscn7wDnWMgP3H2Hw3GtjnYzVzOJuEBVg0ersuYtS03k1BWtPvw1DuqFF6jUFNJpJLS+6YOt4KldwmYyjf4NSM9sLsXYUMp902daafDIH8MjWKgbFXhoDYm+NSp641Z8MQmR/SdDYOojbqV+/13urd69BRD/pcBhHaTxMagS41ZUZxXO6pG5dDwyqXmgnwt+U+A6cMe/d2qSeZtl6U9/iV+F+ZhS3LY8oPFxZZM355my/EGGeM2/xR6q5bqBHpfyXrU+EmfcdjNeUxFU3zkEapfiPJkDpRoHS8fnM0zrb1MLzbrz+DTVRvW0ktS1BssAQJzF+/qqFm+BU10XZ5L8niB6L+dqv/sAWz01uZ2TuLIaiqRrIUbxa/LbN9Q2vXH2O4hSWbZRr2uXx8ZDT9foqUArWUbk2D33h9L6ShFmqlZt+J9DYrY8D5azf7C4VNGwFY/lNLS7vaRxP0n6SC39S7CIqnnbaEIoJ3U4qBtMpKVGCzkLvu6v6XLHWBnkbcqPXGGYOmDGd6dWnnLIYsocFf/HUTsFaVJ9Y1+6cL/5aB4G/xpT/1976m8AgHPW6p9vyMdcgCZo8LmLFjyGx1LleuU4SVQu5BGEJo7nAM9aDa63GnALWefCLeP/NhsC5wnX9yK8xNsq+1C9wt3LZ9AfoNQ0wHrtXPUjMM5Gb3NMXtPm5pSnGF27+P40oygLevj2C8CZ2G39RRSbJjonaXgDOMeDzmt90MtbPXrMA2zr7k7Ke6i5g6vc6ePneJqZlu/Wgcnqk6GMyN7oWoVc95HDSmbnHzNNAPUQhJaalwfd5b3MlNHnenLs5WM2zIu10MJZWcezkqf5dWk7G6ynJ34JF7TQajYD2xCYDmSupyB1irobMXIWO40xU+4bvyeQxR6B9ySszR6qy2X7qmowhd93YV0IVfw6mWifCKic5U/zHDThdD6YVpn3O5wPrEIu5yMe6jrt6+Hs9m4Q86OJaET/f8GEUZnc8Qtbo0jfT+3ElNYddm+TAqLpqCa+kCL1jzNE4F8owkJtlbR/rpPHqMIWh2y3D7HO/giGG5g7l1bsQxRjh/9f0LdLFvsuyTtyole5puGt9452nGGDPdmuZsp+0YCMr3eIY/ewIBYPM6VuJcCBDyWkYSxDmSeniRRBDsdtuk1kUMIY1b0kQ6FtWmR139a0hoVFjqAsKqyJ39oO2eEfemILDWPUv3/YueiSB4f/GnhLxlLfLg6hMaC4tsZN5rbgIFauM8D+xYhqHKqxqpfRFD9lgOeGdW/w+6lm3tFVb6hDX+HAGt05sB7jdaocttwzUQXnhP6G3z/TlqlZ17Sq50IdIPX7MpnfKbNIEYqe/67vnpkSEgL7iwFhsEXSh3wSc1I/2im1/vsA1w4Eq7wKmlsIlN/EM1OUcniIzmRWqGAZg7abNzpN31hIsfS2ia9fSYN4xxg53JFOavcClSSyEAaikeG0klBhc/mufFFIkQ/ZkoPV4IfzAHYEh9N/lG2qMT6HtldtOm5V5ZuG/NsRZL/wPfoqW2L6YXQ35z3DFDNf9jebB7INuJmmb5VbatnVmMq6tj3GfS2uIT9NHOud4aP1ryVxTfGahBozTgY4k3KZ5QjIpvSZxurFzRkZkLuUV2irO3nW6zd7BeAwMyBEJ55XsF40jbqV2sZU4ei38gJWdmBo7aYd1g9uJVtYNVCAIQHRip2ndm696gDAW2c+aw1dqvnZEp7Q/vNdeUK6m1kBWLK1fCjyW5IQLeXrrL3lHfyQAOoEmPQdih3iYc4g5Gh7e96ntW+QG/XE0kHJ+fh/b5nmxtn/VLDD5aJADQr4B6HvyWZkTpM237JIRgKXcFPSjWv5iakd9yvep4rzyMOC4FgMo3cOKCB3i1TN3i0heFK1A2c8zNMutd2z8aZ2dIR4aqfciptkBvUWeBlL4sjHqiVhaOzs/TU88k0LcvCoF6AGmMwc6AHhLlXW4rFZYge9T3R97TZy2y1IX3PrVOojRbvXBwPQx95HnnJ3T63lbjd3FoK8zsk9F2aNDHlRfiTa3pLkLH6b8JvT9AvEm/1tp++PD90xk57jscnKH5mu+uLTbo7YDkRxruV6zNEtUz5W+SsNARo9VzU57dQASatV1DiSQJq3i9ZdIwaPCbherj2aQdLMBvygSCcKQpcFYOpVbBbOpph2U0+2yI2QZsr1XUcVwvdpyiuveVf3F8eAKbgJbEf/OhTx9uaW6E/nfBWqbfgqovucnCUhdD2PryDyztcZLbCaR3DXPgaQrZFk0+oXHDAwCNdFv7wpP45C5+50tknFta6QZ1ZOpqd1OU/l8yjMKBbT6Rpdd9ltB4MkIZMkuBGnwuSVsZxh9FDc7KHM+1371z6wDdIOhbPmTTabAPhZHtG6pYt+gcJeZu2n2HVaV6TrGwVwAE7fY0m4iioR8MoWwgqhlcHUPaZu1g4NZoXLeKm7dl6jIf4iSLb0Ra66KsPA/++MT0KW17g8swnufprbraYPviIHvD2QhgbQJW3FpNt9lj/Zu+/XlnEfRaffbMKI+H8Nmpgy+/5E8He8hStPZoLEb8khjWEMONrm9j4ZmgE7zfviflYPBZKsTbw7iD+vAzD0Foz40kFmapC1QNuByw8nv5gtpY99jMF6caaEXW8D6U+yZ7L9LFrCp3WahpLxdGkLJZDG0oeNtpcgY7Su2szqC+gOWeEvexEGeGctwJanPdf8Fs3aRrx37wqWbfdSt3qDcD2kVO2xsdbyiGwHzYb6ezMmiW7gRl7jGzLnB2Zor8ydlTd436a8B7oyYNeth4R2OEoRjKHf00QYxrQ4bPqKZyykbaYdnT8BNPdnVzSyVW3T1UxCA6mR8qS3IPE/kC+Zlq9Fh8HKgbF1aseuHXuboz1g9ouElKn1g0tTYRs0W/8ZsE/ioPpQMZQ/guTV8dwbkZtYbwaWJARO4Wo7Qw+3eZBjxg07p8E4obH1fS61Sqjb4nd503Muh9UKVuZRMVfxvyOQnxtnY+Ba7s+2xb+5PLb8goLLj36UfAqpTG2I6+Yw49NBoMrtLAi3O7aATV9IfKKgosKQXQR+6NPOqfiDp+6BNOdl0oPIjfCMd3cuvaGZ3c5wPVaOAUpR8jap3+Le8XAHaf7NqJ3zd06/LKJh+/V7PBZ0mM+sAZeR6h2binpYezSdLKRf00Z8B8zc92jdUHIKxclqD1D/ZyVO9jYswCHa/Ll8ofImBWdzSNpQUdR1Hv7Q+ZpUs+R6i+5Dre2J5+CMEr61Kvw1zILYVs62BTS5zKKMCHvdsiBwY02zuBqqh6caM+hNveDQLMlsHtb9PbbBeKvXQp3821liFd29VfuQxp9FAeVj2kDAXokYPDmXaN+cyX/RBC5G9Shg7eYIUTcsmXm7GYwvb41EWgX9x1cT6QP3S29NRHtLuO723REcmlLy9DMI4pSE3hjzgaNsl9FYDme74YFVRZfviOO2z21HWtP2hcD8z3CcFA1PQhMqRXBkBqfEpE2WblunD4nj5rnvg+9Nv8kSPqf4ZJHl0dzKd6l48Vv3EhP6Q6LeRelagM5Rfc1mNqKezhPa2rAPwz7dAQ8S5rG7RfDTlLK0shO/yuJaW+vKMf+ux9fhMA2NRw+joe/ZBFOvZSbiiF6j4SWEzwklczu2U4KfD2uGPhjFUTxSe7usPEGIulkJ20mm4iEyXjKyhPCry2njJUjbos2GSYDg03x14nhoQG7tra+t2NicH6KjcuLLKXm7E2m8Gn6AI7k5t4u1jkM9XSJEHkcXTO7RAxhptn5XnUVoPeLeaTiuNT7Qd+e0R8jgD01vukcScTWPnoEUjg2qCOjVtFAjJbWm8xZWJhBFHTJ9CuDtplk7ep70/uSf3SuJMJ1fjLJADZ+QHV6TygftDBqfNWJhmSXmUNV/MDzlLKEKL2NBGk6pQd9wqWBmSYByGBNY0z9xOOAGsGQcPs+K6yLPDpsu3EIlKlbUQ1zZ1Bm92stZA+kVqg9qunTCIC9dcqAtB+NWjV21oqsRL71v9pKpYkVVE0TaFuBMb0x/hvif4iBu7Cib9xcjmO76C/j6+VDB33gF6pxl8Q30z/pt909KOm0fsVRY0/j/5Li//jBPGFWnwz/Zeua9uERj0ILg1qDy0aHAIIUVk+mBkh2qP8MB4HsskygPbgfbVupbIMoBnahJVlRgJCULVdRqbpmSZd4+yPkYFQICDYy0OlFPOPKD0ofHJijEWZcdee4LebH9of9p8/rx+2nz+fORhdPoQOkrIEQ57jblXWyNHImBTjP47/7ELyFcf/l35penlywUHzQ6f+vNnsHH5ofviJvUJW6L0vuTn9XffXnnxd9zdCYMM/hmw4da1c/o9lOMqkRVhCPvJtwffpXyC07VF9MARk+dYl35lcyU8FKpc/bWFcp4gNhULuU86OLEzIUcUXYQoEkSFDhgwZMmTIkCFDhgwZMmTIkCFDhgwZMmTIkPt/W6tzma++m9UAAAAASUVORK5CYII="
                alt="."
              />
            </span>
          </a>
        </div>
        <div className="flex">
          {" "}
          <a
            href="#"
            className="item-author text-color"
            data-abc="true"
          >
           {item.tieuDe}
          </a>
          <div className="item-except text-muted text-sm h-1x">
          {item.noiDung}
          </div>
        </div>
        <div className="no-wrap">
          <div className="item-date text-muted text-sm d-none d-md-block">
            {formatDateTime(item.ngayTao)}
          </div>
        </div>
      </div>
    ); 
}
