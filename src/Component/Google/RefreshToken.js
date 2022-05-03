export const RefreshToken =(res)=>{
    let refreshTiming = (res.tokenObj.expires_in ||3600-5*60)*1000

    const refresh=async()=>{
        const newAuthRes = await res. reloadAuthResponsed()
        refreshTiming=(newAuthRes.expires_in||3600-5*60)*1000

    }
    setTimeout(refresh,refreshTiming)
}