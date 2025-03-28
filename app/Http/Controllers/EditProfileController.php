<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Residents;
use Inertia\Inertia;
use App\Http\Requests\ResidentDataRequest;


class EditProfileController extends Controller
{
    //
    public function Show(){
        $UserData = Residents::where('user_id', auth()->id())->get()->toArray();
        
        
        return Inertia::render('EditProfile', [
            'UserData' => $UserData
        ]);
    }
    public function Edit(ResidentDataRequest $request){
        
        $UserId = auth()->id();
        $UserRow = Residents::where('user_id', 3)->first();
    
        if ($UserRow) {
            $convertedData = $request->validated();
    
            $convertedData['user_id'] = $UserId;
    
            $UserRow->update($convertedData);

        }
        
        return redirect('/');

    }
}
