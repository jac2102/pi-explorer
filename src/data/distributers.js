import directory from '../data/directory'
const {anchors} = directory

/**
 * Register some known distributer accounts linking to thier issuer accounts.
 *
 * NOTE: where a single distributer/issuer pair is used for multiple
 *  asset types an issuer lookup for just one asset is required to
 *  make the link. (eg. apay.io:ETH)
 */

const issuer = (name, asset) =>
  anchors[name].assets[asset].substring(asset.length + 1)

export default {
  GCYCEO43SCALDT3FYYIWTWUSIH3VOAJX3HFIB4NKGCSGZUV6XNMXDKTD: issuer(
    'smartlands.io',
    'SLT'
  ),
  GCYCEO43SCALDT3FYYIWTWUSIH3VOAJX3HFIB4NKGCSGZUV6XNMXDKTD: issuer(
    'apay.io',
    'ETH'
  ),
  GCYCEO43SCALDT3FYYIWTWUSIH3VOAJX3HFIB4NKGCSGZUV6XNMXDKTD: issuer(
    'ripplefox.com',
    'CNY'
  ),
  GCYCEO43SCALDT3FYYIWTWUSIH3VOAJX3HFIB4NKGCSGZUV6XNMXDKTD: issuer(
    'funtracker.site',
    'FUNT'
  ),
  GCYCEO43SCALDT3FYYIWTWUSIH3VOAJX3HFIB4NKGCSGZUV6XNMXDKTD: issuer(
    'nrvcoin.in',
    'NRV'
  ),
  GCYCEO43SCALDT3FYYIWTWUSIH3VOAJX3HFIB4NKGCSGZUV6XNMXDKTD: issuer(
    'nrvcoin.in',
    'NRV'
  ),
}
