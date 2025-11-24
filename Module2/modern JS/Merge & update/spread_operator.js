function mergeProfiles(profile, updates) {
    return {
        ...profile,
        ...updates,
        address: {
            ...profile.address,
            ...updates.address
        }
    };
    return mergedProfile;
}
const profile = { 
    name: "Charlie", 
    age: 29, 
    address: { 
        city: "San Francisco", 
        zipcode: "94101" 
    } 
};

const updates = { 
    age: 30, 
    address: { 
        zipcode: "94109", 
        country: "USA" 
    } 
};

const mergedProfile = mergeProfiles(profile, updates);
console.log("Original:", profile)
console.log("Updated:",updates)
console.log("Merged Profile:");
console.log(mergedProfile);
